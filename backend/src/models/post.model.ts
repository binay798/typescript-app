import mongoose from 'mongoose';

interface PostSchema extends mongoose.Document {
  title: string;
  author: {
    type: typeof mongoose.Types.ObjectId;
    ref: string;
  };
  photo: string;
  description: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  comments: [{ type: mongoose.Types.ObjectId; ref: 'Comment' }];
}

const postSchema = new mongoose.Schema<PostSchema>(
  {
    title: {
      type: String,
      required: [true, 'Must contain title'],
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Must contain author'],
    },
    photo: {
      type: String,
      required: [true, 'Must contain photo'],
    },
    description: {
      type: String,
      required: [true, 'Must contain description'],
    },
    likes: {
      type: Number,
      default: 0,
      min: 0,
    },
    comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true }
);

export const Post = mongoose.model('Post', postSchema);
