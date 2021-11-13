import { Controller, Get } from '@nestjs/common';

@Controller('blog')
export class BlogController {
  constructor() {}

  @Get()
  async Get() {
    return 0;
  }
}
