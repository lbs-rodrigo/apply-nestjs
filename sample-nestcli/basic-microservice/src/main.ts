import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { retryAttempts: 5, retryDelay: 3000 }
  });
  
  app.connectMicroservice({
    transport: Transport.NATS,
     options: { servers: ['nats://localhost:25666'] },
  });

  await app.startAllMicroservices();
  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);

  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  //   transport: Transport.NATS,
  //   options: {
  //     servers: ['nats://localhost:25666'],
  //   },
  // });
}
bootstrap();
