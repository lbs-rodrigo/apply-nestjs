import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';
import { TypeOrmConfigService } from './database.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'environments/dev.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService
    }),
    
    BlogModule
  ],
})
export class AppModule {}