import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { Public } from './decorator/public.decorator';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from 'src/user/dto/create-user-dto';
import { UserService } from 'src/user/user.service';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Public()
  @Post('auth/register')
  async register(@Body() createUserDto: CreateUserDTO) {
    const password = await bcrypt.hash(createUserDto.password, 10);
    const newUser = {
      ...createUserDto,
      password: password,
    };
    return this.userService.create(newUser);
  }

  @Public()
  @Get('users')
  async test() {
    return this.userService.findAll();
  }
}
