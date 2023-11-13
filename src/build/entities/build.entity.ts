import { ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export type Cost = 'low cost' | 'average' | 'expensive' | 'very expensive';

@ObjectType()
@Entity('build')
export class Build {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 20, nullable: false })
  job: string; // add enum

  @Column()
  pve: boolean;

  @Column({ length: 20, nullable: false })
  cost: Cost;

  @Column()
  startLevel: number;

  @Column()
  endLevel: number;

  @ManyToOne(() => User, (user) => user.builds)
  author: User;

  @Column()
  @CreateDateColumn()
  created_at: Date;
}
