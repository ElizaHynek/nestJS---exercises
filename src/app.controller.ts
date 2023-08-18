import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // decorator zdefiniowany w NestJS, są też @Post, @Delete itp.
  getHello(): string {
    return this.appService.getHello();
  }
}
