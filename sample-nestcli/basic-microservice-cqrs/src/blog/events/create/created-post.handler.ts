import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { EventPattern } from "@nestjs/microservices";
import { CreatePostEvent } from "./create-post.event";

@EventsHandler(CreatePostEvent)
export class CreatedPostHandler
  implements IEventHandler<CreatePostEvent> {
      
  handle(event: CreatePostEvent) {
    console.log('CreatePostHandler Events');
  }

  @EventPattern('post_created')
  async handlePostCreated(data: Record<string, unknown>) {
    // business logic
    console.log('Kafka - handlePostCreated');
  }
}