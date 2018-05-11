import "reflect-metadata";
import {JsonController, Param, Body, BodyParams, Post, Get, Put, Delete} from "routing-controllers"
import {Task}  from "../entity/Task"
import {createConnection} from "typeorm";

// export class Task{
    
//     @IsInt()
//     id: number;
    
//     @MinLength(4,{
//         message:"Content Too Short"
//     })
//     @IsString()
//     content: string;
    
//     @IsBoolean()
//     completed?: boolean = false;
    
//     @IsDate()
//     createdAt?: Date;
// }

@JsonController()
export class TaskController {
        
    @Get('/tasks')
        getAllTasks(){
            return "all tasks"

        }
    @Get('/tasks/:id')
        getTask(@Param('id') id:number){
            return `task ${id}`
        }
    @Post('/tasks')
        addTask(@BodyParams() task:any){
            return task;
            // createConnection().then(()=>{
            //     let newTask = new Task()
            //     newTask = task
            // })
            // return `task added`
        }
    @Delete('tasks/:id')
        deleteTask(@Param('id') id:number){
            return `removing user ${id}`

        }
    @Put('tasks/:id')
        updateTask(@Param('id') id:number, @Body() task:Task){
            return `Update user ${id}`
        }
}