import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { Blog } from "src/blog/repository/blog.entity";

export class CreatePostEvent {
    constructor(
      public readonly blog: Blog
    ) {}
  }

  