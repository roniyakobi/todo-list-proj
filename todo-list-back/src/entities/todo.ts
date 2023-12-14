import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('TODOS')
class Todo {
  @PrimaryColumn('number', { name: 'ID', precision: 10, scale: 0 })
  id!: number;

  @Column('varchar2', { name: 'NAME', length: 50 })
  name!: string;

  @Column({ type: Boolean, name: 'IS_COMPLETED' })
  isCompleted!: boolean;
}

export { Todo };
