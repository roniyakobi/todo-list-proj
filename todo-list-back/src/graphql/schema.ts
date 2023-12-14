import { gql } from 'apollo-server-express';
import { Todo } from '../entities/todo';

export const typeDefs = gql`
  type Todo {
    id: Int
    name: String
    isCompleted: Boolean
  }
  type Query {
    todos: [Todo]
  }
`;
