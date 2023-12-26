import express from 'express';
import { resolvers } from '../graphql/resolvers';

const ApiRouter = express.Router();

ApiRouter.get('/todos', async (req: any, res: any, next: any) => {
  res.json(await resolvers.Query.todos());
});

ApiRouter.post('/todos', async (req: any, res: any, next: any) => {
  res.json(await resolvers.Mutation.addTodo('', req.body.todo));
});

ApiRouter.patch('/todos', async (req: any, res: any, next: any) => {
  // res.json(await resolvers.Mutation.updateTodo('', req.body.todo));
});

ApiRouter.delete('/todos', async (req: any, res: any, next: any) => {
  res.json(await resolvers.Mutation.deleteTodo('', req.body.id));
});

export { ApiRouter };
