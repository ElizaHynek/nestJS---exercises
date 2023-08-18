import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const name = 'Eliza';
    const text = `Hello ${name}`;
    return text;
  }
}
