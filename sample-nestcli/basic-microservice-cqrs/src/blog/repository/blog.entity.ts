import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blog {
    
    @ApiProperty({ example: 1, description: 'Unique identify post' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Jose Granja', description: 'Author name' })
    @Column()
    author: string;

    @ApiProperty({ example: '5 New Killer Features of Nestjs', description: 'Post blog title' })
    @Column()
    title: string;

    @ApiProperty({ example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', description: 'Post blog text' })
    @Column()
    description: string;

    @ApiProperty({ example: 'frontend', description: 'Post blog category' })
    @Column()
    category: string;
    
    @ApiProperty({ example: '2021-11-07T02:29:20.000Z', description: 'Post blog date created' })
    @Column()
    created: Date;

    @ApiProperty({ example: '2021-11-07T02:29:20.000Z', description: 'Post blog date updated' })
    @Column()
    updated: Date;
}
