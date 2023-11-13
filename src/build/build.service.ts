import { Injectable } from '@nestjs/common';
import { CreateBuildDto } from './dto/create-build.dto';
import { UpdateBuildDto } from './dto/update-build.dto';
import { Build } from './entities/build.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BuildService {
  constructor(
    @InjectRepository(Build)
    private buildRepository: Repository<Build>,
  ) {}

  async findAll(): Promise<Build[]> {
    return this.buildRepository.find();
  }

  async findOne(id: number): Promise<Build> {
    return this.buildRepository.findOne({ where: { id } });
  }

  async create(dto: Partial<Build>): Promise<Build> {
    const newBuild = this.buildRepository.create(dto);
    return this.buildRepository.save(newBuild);
  }

  async update(id: number, Build: Partial<Build>): Promise<Build> {
    await this.buildRepository.update(id, Build);
    return this.buildRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.buildRepository.delete(id);
  }
}
