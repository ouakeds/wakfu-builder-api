import { Module } from '@nestjs/common';
import { BuildService } from './build.service';
import { BuildController } from './build.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Build } from './entities/build.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Build])],
  controllers: [BuildController],
  providers: [BuildService],
})
export class BuildModule {}
