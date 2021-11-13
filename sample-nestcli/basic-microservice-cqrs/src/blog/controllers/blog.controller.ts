import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePostCommand } from 'src/blog/commands/create/create-post.command';
import { BlogModel } from 'src/blog/models/blog.model';
import { Blog } from 'src/blog/repository/blog.entity';
import { BlogService } from '../services/blog.services';
import { CreateBlogDto } from './contracts/create-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(
    // private readonly command: CommandBus,
    // private readonly query: QueryBus,
    private readonly blogSvc: BlogService
  ) {}


  @Post()
  @ApiOperation({ summary: 'Create post blog' })
  @ApiResponse({status: 200, description: 'Created post', type: Blog})
  async createPost(@Body() createBlogDto: CreateBlogDto) {
    console.log('Controller');
    await this.blogSvc.createPost(createBlogDto as Blog);

    //return this.command.execute(new CreatePostCommand(new BlogModel(createBlogDto as Blog)));
  }

  @Get()
  @ApiOperation({ summary: 'List all posts' })
  @ApiResponse({status: 200, description: 'List all', type: Blog, isArray: true})
  async getAllPosts():Promise<Blog[]> {
    return null;
    //return await this.blogService.findAll();
  }
}
