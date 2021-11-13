import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: { retryAttempts: 5, retryDelay: 3000 }
  });

  app.connectMicroservice({
    transport: Transport.KAFKA,
     options: { client:{ brokers: [`${config.get('KAFKA_HOST')}:${config.get('KAFKA_PORT')}`] } },
  });

  await app.startAllMicroservices();
  await app.listen(`${config.get('APP_PORT')}`);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
