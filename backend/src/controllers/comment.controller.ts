import { Request, Response, NextFunction } from 'express';
import { Comment } from './../models/comment.model';
import { catchAsync } from '../utils/catchAsync';
import { Post } from '../models/post.model';
import { UserRequest } from './auth.controller';
import { ApiFeatures } from '../utils/ApiFeatures';

export const getComments = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const postId = req.params.id;
    const query = new ApiFeatures(Post.find({ id: postId }), req.query)
      .filter()
      .fields()
      .sort()
      .pagination()
      .populate();
    const comments = await query.query;

    res.status(200).json({
      status: 'success',
      comments: comments[0],
    });
  }
);

export const createComment = catchAsync(
  async (req: UserRequest, res: Response, next: NextFunction) => {
    const postId = req.params.id;
    const userId = req.user.id;
    const { text } = req.body;
    const comment = await Comment.create({ author: userId, text });
    const post = await Post.findByIdAndUpdate(
      postId,
      {
        $addToSet: { comments: comment.id },
      },
      { new: true }
    );
    res.status(200).json({
      status: 'success',
      post,
    });
  }
);
