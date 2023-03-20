import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('tasks')
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column("int")
    level: number

    @Column("varchar", { length: 200 })
    description: string

    @Column("varchar", { length: 200 })
    rightAnswer: string
}