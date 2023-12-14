import express from 'express';

const ApiRouter = express.Router();

ApiRouter.get('/', (req, res, next) => {
  res.send('Hello world!');
});

export { ApiRouter };
