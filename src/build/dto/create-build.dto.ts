import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { Cost } from '../entities/build.entity';

export class CreateBuildDto {
  @IsString()
  name: string;

  @IsString()
  job: string;

  @IsString()
  author: string;

  @IsNumber()
  startLevel: number;

  @IsNumber()
  endLevel: number;

  @IsString()
  cost: Cost;

  @IsBoolean()
  pve: boolean;
}
