import { BlogModel } from "src/blog/models/blog.model";

export class CreatePostCommand {
    constructor(
      public readonly blog: BlogModel
    ) {}
  }