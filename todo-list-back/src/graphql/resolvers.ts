import { getRepository } from 'typeorm';
import { Todo } from '../entities/todo';

export const resolvers = {
  Query: {
    todos: async () => {
      const todoRepository = getRepository(Todo);
      return (await todoRepository.find()).sort((curr, next) => curr.id - next.id);
    },
  },
  Mutation: {
    addTodo: async (_: any, args: { name: String }) => {
      const todoRepository = getRepository(Todo);
      const todos = await todoRepository.find();
      let newId: number;

      if (todos.length) {
        newId = Math.max(...todos.map((currTodo: Todo) => currTodo.id)) + 1;
      } else {
        newId = 1;
      }

      const newTodo = todoRepository.create({
        id: newId,
        name: args.name,
        isCompleted: false,
      });
      await todoRepository.save(newTodo);
      return todoRepository.findOne({ id: newId });
    },
    deleteTodo: async (_: any, args: { id: number }) => {
      const todoRepository = getRepository(Todo);
      const todoToRemove = await todoRepository.findOne({ id: args.id });
      if (todoToRemove) {
        await todoRepository.remove(todoToRemove);
        return true;
      }
      return false;
    },
    toggleTodo: async (_: any, args: { id: number }) => {
      const todoRepository = getRepository(Todo);
      const todoToUpdate = await todoRepository.findOne({ id: args.id });
      if (todoToUpdate) {
        todoToUpdate.isCompleted = !todoToUpdate.isCompleted;
        await todoRepository.save(todoToUpdate);
        return todoToUpdate;
      }
      return todoRepository.findOne();
    },
  },
};
