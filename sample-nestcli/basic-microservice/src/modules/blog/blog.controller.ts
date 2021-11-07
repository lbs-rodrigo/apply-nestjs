import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class BlogController {
  @MessagePattern({ cmd: 'create' })
  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
}
