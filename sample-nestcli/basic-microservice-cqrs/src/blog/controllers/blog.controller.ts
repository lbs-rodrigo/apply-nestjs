import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Blog } from 'src/blog/repository/blog.entity';
import { EVENT_POST_CREATE } from '../blog.constants';
import { BlogService } from '../services/blog.services';
import { CreateBlogDto } from './contracts/create-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(
    private readonly blogSvc: BlogService
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create post blog' })
  @ApiResponse({status: 200, description: 'Created post', type: Blog})
  async createPost(@Body() createBlogDto: CreateBlogDto) {
    console.log('Controller');
    return await this.blogSvc.createPost(createBlogDto as Blog);
  }

  @EventPattern(EVENT_POST_CREATE)
  async handlePostCreated(blog: Blog) {
    console.log('Kafka Event Controller');
    blog.created = new Date();
    blog.updated = new Date();
    // await this.blogRepository.save(blog);
    console.log('Kafka - handlePostCreated Controller');
  }

  @Get()
  @ApiOperation({ summary: 'List all posts' })
  @ApiResponse({status: 200, description: 'List all', type: Blog, isArray: true})
  async getAllPosts():Promise<Blog[]> {
    return null;
    //return await this.blogService.findAll();
  }
}
