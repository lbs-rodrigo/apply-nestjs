import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventPattern, Payload } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { EVENT_POST_CREATE } from 'src/blog/blog.constants';
import { Blog } from 'src/blog/repository/blog.entity';
import { Repository } from 'typeorm';
import { CreatePostEvent } from './create-post.event';

@EventsHandler(CreatePostEvent)
export class CreatePostHandler implements IEventHandler<CreatePostEvent> {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>
  ) {}

  async handle(event: CreatePostEvent) {
    console.log('Event');

    const blog = event.blog;
    blog.created = new Date();
    blog.updated = new Date();
    await this.blogRepository.save(blog);
    console.log('Save DB');
    
    console.log('finish event created post!');
  }

  @EventPattern(EVENT_POST_CREATE)
  async handlePostCreated(@Payload() data: CreatePostEvent) {
    console.log('Kafka Event');
    console.log(data);
    const blog = data.blog;
    blog.created = new Date();
    blog.updated = new Date();
    await this.blogRepository.save(blog);
    console.log('Kafka - handlePostCreated');
  }
}
