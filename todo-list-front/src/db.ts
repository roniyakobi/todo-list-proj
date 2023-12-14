export interface Todo {
    id: number;
    name: string;
    isCompleted: boolean;
  }
  
  export const data: Todo[] = [
    {
      id: 1,
      name: 'Take out the trash',
      isCompleted: false,
    },
  
    {
      id: 2,
      name: 'Do your homework',
      isCompleted: true,
    },
  
    {
      id: 3,
      name: 'Clean your room',
      isCompleted: true,
    },
  
    {
      id: 4,
      name: 'Play video games',
      isCompleted: false,
    },
  ];