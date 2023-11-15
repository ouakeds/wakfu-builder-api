import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/auth/decorator/public.decorator';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Public()
  @Get('api')
  async test() {
    return this.apiService.getItems();
  }
}
