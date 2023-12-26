import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('todos')
class Todo extends BaseEntity {
  @PrimaryColumn('numeric', { name: 'id', precision: 10, scale: 0 })
  id!: number;

  @Column({ type: String, name: 'name', length: 50 })
  name!: String;

  @Column({ type: Boolean, name: 'is_completed' })
  isCompleted!: boolean;
}

export { Todo };
