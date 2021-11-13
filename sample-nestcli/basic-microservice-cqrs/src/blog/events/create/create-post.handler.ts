import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from 'src/blog/repository/blog.entity';
import { Repository } from 'typeorm';
import { CreatePostEvent } from './create-post.event';

@EventsHandler(CreatePostEvent)
export class CreatePostHandler implements IEventHandler<CreatePostEvent> {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
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

  // @EventPattern('post_created')
  // async handlePostCreated(data: CreatePostEvent) {
  //   // business logic
  //   const blog = data.blog;
  //   blog.created = new Date();
  //   blog.updated = new Date();
  //   await this.blogRepository.save(blog);
  //   console.log('Kafka - handlePostCreated');
  // }
}
