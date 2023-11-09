import { Controller, Get } from '@nestjs/common';
import { Query } from '@nestjs/graphql';

@Controller()
export class AppController {
  @Get()
  @Query(() => String)
  getHello(): string {
    return 'Hey';
  }
}
