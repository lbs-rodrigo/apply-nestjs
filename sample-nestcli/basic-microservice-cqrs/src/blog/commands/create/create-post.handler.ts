import { CommandHandler, EventBus, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostEvent } from 'src/blog/events/create/create-post.event';
import { Blog } from 'src/blog/repository/blog.entity';
import { BlogService } from 'src/blog/services/blog.services';
import { Repository } from 'typeorm';
import { CreatePostCommand } from './create-post.command';

@CommandHandler(CreatePostCommand)
export class CreatePostHandler implements ICommandHandler<CreatePostCommand> {
  // constructor(
  //   private readonly publisher: EventPublisher,
  //   private readonly blogService: BlogService
  // ) {}

  constructor(
    // @InjectRepository(Blog)
    // private readonly blogRepository: Repository<Blog>,
    // private readonly publisher: EventPublisher,
    private readonly eventBus: EventBus<CreatePostEvent>
  ) {}

  // async CreatePost(blogModel: BlogModel):Promise<BlogModel> {
  //     console.log('BlogService Services');
  //     const blog = blogModel.blog;
  //     blog.created = new Date();
  //     blog.updated = new Date();
  //     return new BlogModel(await this.blogRepository.save(blog));
  // }

  async execute(command: CreatePostCommand) {
    console.log('Command');

    this.eventBus.publish(new CreatePostEvent(command.blog));
    
    //return new BlogModel(await this.blogRepository.save(blog));

    // console.log('CreatePostHandler Commands');

    // const { blog } = command;
    // const eventBlog = this.publisher.mergeObjectContext(
    //   await this.blogService.CreatePost(blog)
    // );

    // eventBlog.createPost(blog.blog);
    // eventBlog.commit();
  }
}
