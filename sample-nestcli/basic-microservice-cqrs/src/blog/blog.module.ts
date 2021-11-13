import { Inject, Module, OnModuleInit } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './controllers/blog.controller';
import { Blog } from './repository/blog.entity';
import { BLOG_SERVICE, EVENT_POST_CREATE, KAFKA_CLIENTID, KAFKA_GROUPDID, MESSAGE_GET } from './blog.constants';
import { BlogService } from './services/blog.services';
import { TesteCreatePostHandler } from './events/teste-create-post.handler';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([Blog]),
    ClientsModule.register([
      {
        name: BLOG_SERVICE,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: KAFKA_CLIENTID,
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: KAFKA_GROUPDID,
            
          },
          producer:{
            allowAutoTopicCreation:true,
            idempotent:true
          }
        },
      },

    ]),
  ],
  controllers: [BlogController],
  providers: [BlogService, TesteCreatePostHandler],
})
export class BlogModule implements OnModuleInit {
  constructor(@Inject(BLOG_SERVICE) private readonly client: ClientKafka) { }
  onModuleInit() {
    console.log('BlogModule inicializado!');
    this.client.subscribeToResponseOf(MESSAGE_GET); 
  }
}
