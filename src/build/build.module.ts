import { Module } from '@nestjs/common';
import { BuildService } from './build.service';
import { BuildController } from './build.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Build } from './entities/build.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Build]), UserModule],
  controllers: [BuildController],
  providers: [BuildService],
})
export class BuildModule {}
