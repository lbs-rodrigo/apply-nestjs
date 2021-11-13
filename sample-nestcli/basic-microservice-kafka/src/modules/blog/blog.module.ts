import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BlogController } from './blog.controller';
import { HERO_SERVICE } from './blog.constants';

@Module({
  controllers: [BlogController],
  imports: [
    ClientsModule.register([
      {
        name: HERO_SERVICE,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'hero',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'hero-consumer',
          }
        }
      },
    ]),
  ]
})
export class BlogModule {}
