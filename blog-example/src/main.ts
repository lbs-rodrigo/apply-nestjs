import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  
  const configSwagger = new DocumentBuilder()
    .setTitle('Blog API')
    .setDescription('The blog API description')
    .setVersion('1.0')
    .addTag('blog')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(`${config.get('APP_PORT')}`);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();