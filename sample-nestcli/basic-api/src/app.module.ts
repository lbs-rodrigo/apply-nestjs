import { CacheModule, Module } from '@nestjs/common';
import { BlogModule } from './modules/blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    CacheModule.register({isGlobal:true}),
    BlogModule,
    UserModule
  ]
})
export class AppModule {}
