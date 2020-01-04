import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";

@Entity("todos")
export class Todos extends BaseEntity {
  @PrimaryGeneratedColumn() id: string;

  @Column({
    type: "text"
  })
  name: string;

  @Column({
    type: "text"
  })
  description: string;

  @Column("boolean", {
    default: false
  })
  finished: boolean;

  @CreateDateColumn({
    type: "timestamp"
  })
  created: string;
}
