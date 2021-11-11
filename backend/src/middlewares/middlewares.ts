import path from 'path';
import express, { Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

const staticFilePath = path.resolve(`${__dirname}/../public`);

export function middlewares(app: Express): void {
  app.use('/static', express.static(staticFilePath));
  app.use(morgan('dev'));
  app.use(
    cors({
      origin: ['http://localhost:3000'],
    })
  );
  app.use(express.json());
  app.use(cookieParser());
}
