import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Todo {
    id: Int
    name: String
    isCompleted: Boolean
  }
  input TodoInput {
    id: Int
    name: String
    isCompleted: Boolean
  }
  type Query {
    todos: [Todo]
  }
  type Mutation {
    addTodo(todo: TodoInput): [Todo]
    updateTodo(todo: TodoInput): [Todo]
    deleteTodo(idToDelete: Int): [Todo]
  }
`;
