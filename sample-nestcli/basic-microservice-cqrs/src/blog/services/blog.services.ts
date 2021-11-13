import { Injectable } from "@nestjs/common";
import { EventBus, QueryBus } from "@nestjs/cqrs";
import { CreatePostEvent } from "../events/create/create-post.event";
import { Blog } from "../repository/blog.entity";

@Injectable()
export class BlogService {
    constructor(
        private readonly eventBus: EventBus,
        private readonly query: QueryBus) {}

    async createPost(blog: Blog) {
        console.log('Service');
        return this.eventBus.publish(new CreatePostEvent(blog));
    }
}