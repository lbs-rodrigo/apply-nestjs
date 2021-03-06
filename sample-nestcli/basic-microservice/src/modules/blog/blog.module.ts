import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BlogController } from './blog.controller';
import { MATH_SERVICE } from './blog.constants';

@Module({
  controllers: [BlogController],
  imports: [
    ClientsModule.register([
      {
        name: MATH_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:25666'],
        }
      },
    ]),
  ]
})
export class BlogModule {}
