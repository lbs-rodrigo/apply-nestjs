import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [UserModule, BlogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
