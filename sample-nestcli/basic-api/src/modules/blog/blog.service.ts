import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>) {}

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const blog = new Blog();
    blog.author = createBlogDto.author;
    blog.title = createBlogDto.title;
    blog.description = createBlogDto.description;
    blog.category = createBlogDto.category;
    blog.created = new Date();
    blog.updated = new Date();
    return await this.blogRepository.save(blog);
    //return await this.blogRepository.save(createBlogDto as Blog);
  }

  async findAll(): Promise<Blog[]> {
    return await this.blogRepository.find();
  }

  async findOne(id: number): Promise<Blog> {
    return await this.blogRepository.findOne(id);
  }

  async update(id: number, updateBlogDto: UpdateBlogDto): Promise<UpdateResult> {
    return await this.blogRepository.update(id, updateBlogDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.blogRepository.delete(id);
  }
}
