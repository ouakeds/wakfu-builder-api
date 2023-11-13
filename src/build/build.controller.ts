import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BuildService } from './build.service';
import { CreateBuildDto } from './dto/create-build.dto';
import { UpdateBuildDto } from './dto/update-build.dto';
import { Public } from 'src/auth/decorator/public.decorator';

@Controller('builds')
export class BuildController {
  constructor(private readonly buildService: BuildService) {}

  @Post()
  create(@Body() createBuildDto: CreateBuildDto) {
    // bind author current user logged
    return this.buildService.create(createBuildDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.buildService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildDto: UpdateBuildDto) {
    return this.buildService.update(+id, updateBuildDto);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildService.remove(+id);
  }
}
