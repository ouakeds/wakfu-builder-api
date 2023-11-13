import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { Cost } from '../entities/build.entity';
import { User } from 'src/user/entities/user.entity';

export class CreateBuildDto {
  @IsString()
  name: string;

  @IsString()
  job: string;

  @IsNumber()
  startLevel: number;

  @IsNumber()
  endLevel: number;

  @IsString()
  cost: Cost;

  @IsBoolean()
  pve: boolean;

  author?: User;
}
