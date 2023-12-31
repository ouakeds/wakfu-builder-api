import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';

@Module({
  imports: [HttpModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
