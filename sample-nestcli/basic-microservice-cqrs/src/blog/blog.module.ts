import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreatePostHandler } from './commands/create/create-post.handler';
import { BlogController } from './controllers/blog.controller';
import { CreatePostEvent } from './events/create/create-post.event';
import { CreatedPostHandler } from './events/create/created-post.handler';
import { Blog } from './repository/blog.entity';
import { BlogService } from './services/blog.services';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([Blog]),
    ClientsModule.register([
      {
        name: 'BLOG_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'blog',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'blog-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [BlogController],
  providers: [BlogService, CreatePostHandler, CreatedPostHandler],
})
export class BlogModule {}
