import { ObjectType, Field } from '@nestjs/graphql';
import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 500, nullable: false })
  username: string;

  @Field()
  @Column({ length: 500, nullable: false })
  password: string;

  @Field()
  @Column('text', { nullable: false })
  email: string;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;
}
