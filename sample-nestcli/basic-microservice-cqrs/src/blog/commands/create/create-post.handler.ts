import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { EventPattern } from "@nestjs/microservices";
import { CreatePostEvent } from "src/blog/events/create/create-post.event";
import { BlogService } from "src/blog/services/blog.services";
import { CreatePostCommand } from "./create-post.command";

@CommandHandler(CreatePostCommand)

export class CreatePostHandler implements ICommandHandler<CreatePostCommand> {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly blogService: BlogService
  ) {}


  
  async execute(command: CreatePostCommand) {
    console.log('CreatePostHandler Commands');

    
    const { blog } = command;
    const eventBlog = this.publisher.mergeObjectContext(
      await this.blogService.CreatePost(blog)
    );
      
    eventBlog.createPost(blog.blog);
    eventBlog.commit();
  }
}