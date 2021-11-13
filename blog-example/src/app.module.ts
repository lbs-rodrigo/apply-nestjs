import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog-module/blog.module';
import { TypeOrmConfigService } from '../config/database.config';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './blog-module/common/filters/exceptions.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'config/dev.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService
    }),
    CacheModule.register({isGlobal:true}),
    BlogModule
  ],
  providers:[
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
