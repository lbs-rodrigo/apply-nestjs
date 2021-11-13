import { CacheModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { BlogModule } from '../blog.module';
import { AuthGuard } from '../common/filters/auth.guard';
import { Blog } from '../repository/blog.entity';
import { BlogService } from './blog.service';

describe('BlogService', () => {
  let service: BlogService;
  let repo: Repository<Blog>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
            envFilePath:'config/dev.env',
        }),
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '%RUZhP1Zwc5&',
          database: 'db-blog',
          synchronize: false,
          autoLoadEntities: true,
          entities: [Blog]

        }),
        CacheModule.register({isGlobal:true}),
        BlogModule,
        AuthGuard
      ],
      exports:[ConfigModule],
    }).compile();

    repo = getRepository(Blog);
    service = module.get<BlogService>(BlogService);
    
  });

  it('should be defined', async () => {
    

    let teste1 = await service.findAll();
    let teste2 = await service.findAll();
    let teste3 = await service.findAll();
    let teste4 = await service.findAll();
    expect(service).toBeDefined();
  });
});
