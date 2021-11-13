import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePostCommand } from "../commands/create/create-post.command";
import { BlogModel } from "../models/blog.model";
import { Blog } from "../repository/blog.entity";

@Injectable()
export class BlogService {
    // constructor(@InjectRepository(Blog)
    // private readonly blogRepository: Repository<Blog>) {}

    // async CreatePost(blogModel: BlogModel):Promise<BlogModel> {
    //     console.log('BlogService Services');
    //     const blog = blogModel.blog;
    //     blog.created = new Date();
    //     blog.updated = new Date();
    //     return new BlogModel(await this.blogRepository.save(blog));
    // }
    constructor(
        private commandBus: CommandBus,
        private readonly query: QueryBus,) {}

    async createPost(blog: Blog) {
        console.log('Service');
        return this.commandBus.execute(new CreatePostCommand(blog));
    }
}