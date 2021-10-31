import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// MIDDLEWARES
app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);

// API ROUTES
app.get('/', (req: Request, res: Response): void => {
  res.send('hello world');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
