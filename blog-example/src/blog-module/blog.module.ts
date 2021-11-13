import { CacheInterceptor, Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { APP_INTERCEPTOR } from '@nestjs/core';
import { Blog } from './repository/blog.entity';
import { BlogController } from './controller/blog.controller';
import { BlogService } from './services/blog.service';

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  controllers: [BlogController],
  providers: [
    BlogService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class BlogModule {}
