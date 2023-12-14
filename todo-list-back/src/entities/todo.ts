import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('TODOS')
class Todo {
  @PrimaryColumn('numeric', { name: 'ID', precision: 10, scale: 0 })
  id!: number;

  @Column({ type: String, name: 'NAME', length: 50 })
  name!: string;

  @Column({ type: Boolean, name: 'IS_COMPLETED' })
  isCompleted!: boolean;
}

export { Todo };
