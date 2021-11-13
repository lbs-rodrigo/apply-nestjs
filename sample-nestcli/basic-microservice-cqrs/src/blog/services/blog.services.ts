import { Inject, Injectable } from "@nestjs/common";
import { EventBus, QueryBus } from "@nestjs/cqrs";
import { ClientKafka } from "@nestjs/microservices";
import { Blog } from "../repository/blog.entity";
import { BLOG_SERVICE, EVENT_POST_CREATE } from "../blog.constants";

@Injectable()
export class BlogService {
    constructor(
        private readonly eventBus: EventBus,
        private readonly query: QueryBus,
        @Inject(BLOG_SERVICE) private readonly client: ClientKafka) {}

    async createPost(blog: Blog) {
        console.log('Service');
        return await this.client.emit(EVENT_POST_CREATE, blog);
        //return await this.client.send(EVENT_POST_CREATE, blog);
        //return this.eventBus.publish(new CreatePostEvent(blog));
    }
}