import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog-module/blog.module';
import { TypeOrmConfigService } from '../config/database.config';


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
  ]
})
export class AppModule {}
