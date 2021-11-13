import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Blog } from 'src/blog/repository/blog.entity';
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

  @Get()
  @ApiOperation({ summary: 'List all posts' })
  @ApiResponse({status: 200, description: 'List all', type: Blog, isArray: true})
  async getAllPosts():Promise<Blog[]> {
    return null;
    //return await this.blogService.findAll();
  }
}
