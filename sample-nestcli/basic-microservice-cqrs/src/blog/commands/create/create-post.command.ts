import { BlogModel } from "src/blog/models/blog.model";
import { Blog } from "src/blog/repository/blog.entity";

export class CreatePostCommand {
    constructor(
      public readonly blog: Blog
    ) {}
  }