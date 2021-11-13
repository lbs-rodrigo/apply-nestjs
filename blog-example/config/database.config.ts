import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly config: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.config.get('DB_HOST'),
      port: +this.config.get<number>('DB_PORT'),
      username: this.config.get('DB_USER'),
      password: this.config.get('DB_PWD'),
      database: this.config.get('DB_DATABASE'),
      synchronize: this.config.get<boolean>('DB_SYNCHRONIZE'),
      autoLoadEntities: this.config.get<boolean>('DB_LOAD_ENTITIES'),
    };
  }
}
