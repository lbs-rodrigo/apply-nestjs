import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@ApiTags('blog')
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  @ApiOperation({ summary: 'Create post blog' })
  @ApiResponse({status: 200, description: 'Created post', type: Blog})
  async create(@Body() createBlogDto: CreateBlogDto):Promise<Blog> {
    return await this.blogService.create(createBlogDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all posts' })
  @ApiResponse({status: 200, description: 'List all', type: Blog, isArray: true})
  async findAll():Promise<Blog[]> {
    return await this.blogService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find by id post' })
  @ApiResponse({status: 200, description: 'Find one', type: Blog})
  async findOne(@Param('id') id: string):Promise<Blog> {
    return await this.blogService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update post blog' })
  @ApiResponse({status: 200, description: 'Updated post', type: UpdateResult})
  async update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto): Promise<UpdateResult> {
    return await this.blogService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete post blog' })
  @ApiResponse({status: 200, description: 'Deleted post', type: DeleteResult})
  async remove(@Param('id') id: string):Promise<DeleteResult> {
    return await this.blogService.remove(+id);
  }
}
