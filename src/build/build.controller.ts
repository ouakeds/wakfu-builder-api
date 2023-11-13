import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { BuildService } from './build.service';
import { CreateBuildDto } from './dto/create-build.dto';
import { Public } from 'src/auth/decorator/public.decorator';
import { UserService } from 'src/user/user.service';

@Controller('builds')
export class BuildController {
  constructor(
    private readonly buildService: BuildService,
    private readonly userService: UserService,
  ) {}

  @Post()
  async create(@Request() req, @Body() createBuildDto: CreateBuildDto) {
    createBuildDto.author = await this.userService.findByEmail(req.user.email);
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
    return this.buildService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBuildDto: UpdateBuildDto) {
  //   return this.buildService.update(+id, updateBuildDto);
  // }

  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildService.remove(id);
  }
}
