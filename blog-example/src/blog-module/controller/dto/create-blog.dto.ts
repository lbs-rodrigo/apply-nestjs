import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateBlogDto {
  @ApiProperty({ example: 'Jose Granja', description: 'Author name' })
  @MinLength(4, {
    message: 'author is too short',
  })
  @MaxLength(50, {
    message: 'author is too long',
  })
  author: string;
  
  @ApiProperty({ example: '5 New Killer Features of Nestjs', description: 'Post blog title' })
  @MinLength(30, {
    message: 'title is too short',
  })
  @MaxLength(500, {
    message: 'title is too long',
  })
  title: string;

  @ApiProperty({ example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', description: 'Post blog text' })  
  @MinLength(30, {
    message: 'description is too short',
  })
  @MaxLength(10000, {
    message: 'description is too long',
  })
  description: string;

  @ApiProperty({ example: 'frontend', description: 'Post blog category' })
  @MinLength(2, {
    message: 'category is too short',
  })
  @MaxLength(35, {
    message: 'category is too long',
  })
  category: string;
}
