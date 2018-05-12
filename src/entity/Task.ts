import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { MinLength, IsInt, IsDate, IsBoolean, IsString } from "class-validator";

@Entity()
export class Task{
    
    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column('text')
    @MinLength(4,{
        message:"Content Too Short"
    })
    @IsString()
    content: string;
    
    @Column()
    @IsBoolean()
    completed?: boolean = false;
    
    @Column()
    @IsDate()
    createdAt?: Date = new Date();
}
