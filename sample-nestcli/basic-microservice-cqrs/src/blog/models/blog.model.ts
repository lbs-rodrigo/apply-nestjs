import { AggregateRoot } from '@nestjs/cqrs';
import { CreatePostEvent } from '../events/create/create-post.event';
import { Blog } from '../repository/blog.entity';

export class BlogModel extends AggregateRoot {
    constructor(public readonly blog: Blog) {
      super();
    }
  
    createPost(blog: Blog) {
      // logic
      this.apply(new CreatePostEvent(blog));
    }
  }