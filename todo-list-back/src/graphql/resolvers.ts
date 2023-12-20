import { getRepository } from 'typeorm';
import { Todo } from '../entities/todo';

export const resolvers = {
  Query: {
    todos: async () => {
      const todoRepository = getRepository(Todo);
      return todoRepository.find();
    },
  },
  Mutation: {
    addTodo: async (_: any, args: { todo: Todo }) => {
      const todoRepository = getRepository(Todo);
      await todoRepository.save(args.todo);
      return todoRepository.find();
    },
    updateTodo: async (_: any, args: { updatedTodo: Todo }) => {
      const todoRepository = getRepository(Todo);
      const todoToUpdate = await todoRepository.findOne({ id: args.updatedTodo.id });
      if (todoToUpdate) {
        todoToUpdate.name = args.updatedTodo.name;
        todoToUpdate.isCompleted = args.updatedTodo.isCompleted;
        await todoRepository.save(todoToUpdate);
      }
      return todoRepository.find();
    },
    deleteTodo: async (_: any, args: { idToDelete: number }) => {
      const todoRepository = getRepository(Todo);
      const todoToRemove = await todoRepository.findOne({ id: args.idToDelete });
      if (todoToRemove) {
        await todoRepository.remove(todoToRemove);
      }
      return todoRepository.find();
    },
  },
};
