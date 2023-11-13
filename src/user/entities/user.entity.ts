import { ObjectType } from '@nestjs/graphql';
import { Build } from 'src/build/entities/build.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 500, nullable: false })
  username: string;

  @Column({ length: 500, nullable: false })
  password: string;

  @Column('text', { nullable: false })
  email: string;

  @OneToMany(() => Build, (build) => build.author)
  builds: Build[];

  @Column()
  @CreateDateColumn()
  created_at: Date;
}
