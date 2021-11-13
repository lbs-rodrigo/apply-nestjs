import { Injectable } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { EVENT_POST_CREATE } from 'src/blog/blog.constants';
import { Blog } from 'src/blog/repository/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TesteCreatePostHandler {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}

  // @EventPattern(EVENT_POST_CREATE)
  // async handlePostCreated(blog: Blog) {
  //   console.log('Kafka Event');
  //   blog.created = new Date();
  //   blog.updated = new Date();
  //   await this.blogRepository.save(blog);
  //   console.log('Kafka - handlePostCreated');
  // }
}
