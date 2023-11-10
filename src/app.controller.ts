import { Controller, Get } from '@nestjs/common';
import { Query } from '@nestjs/graphql';
import { Public } from './auth/decorator/public.decorator';

@Controller()
export class AppController {
  @Get()
  @Query(() => String)
  @Public()
  getHello(): string {
    return 'Hey';
  }
}
