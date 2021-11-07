import { ApiProperty } from "@nestjs/swagger";

export class CreateBlogDto {
  @ApiProperty({ example: 'Jose Granja', description: 'Author name' })
  author: string;
  @ApiProperty({ example: '5 New Killer Features of Nestjs', description: 'Post blog title' })
  title: string;
  @ApiProperty({ example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', description: 'Post blog text' })
  description: string;
  @ApiProperty({ example: 'frontend', description: 'Post blog category' })
  category: string;
}
