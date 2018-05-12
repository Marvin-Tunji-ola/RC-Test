import "reflect-metadata";
import {JsonController, Body, Param,Req, Post, Get, Put, Delete} from "routing-controllers"
import {Task}  from "../entity/Task"
import {createConnection, Repository, getConnectionManager} from "typeorm";
import { EntityFromParam, EntityFromBody } from "typeorm-routing-controllers-extensions";


@JsonController()
export class TaskController {
    private taskRepository: Repository<Task>
    
    constructor(){
        this.taskRepository = getConnectionManager().get().getRepository(Task)
    }
        
    @Get('/tasks')
        getAllTasks(){
            return this.taskRepository.find()
        }

    @Get('/tasks/:id')
        getTask(@EntityFromParam('id') task:Task){
            return task
        }

    @Post('/tasks')
        addTask(@EntityFromBody() task:Task){
               return this.taskRepository.save(task)
        }

    @Delete('/tasks/:id')
        deleteTask(@EntityFromParam('id') task:Task){
            return this.taskRepository.remove(task).then(task=>task)

        }

    @Put('/tasks/:id')
        updateTask(@EntityFromParam('id') old:Task, @EntityFromBody() task:Task){
            old = task
            this.taskRepository.save(old).then(task=>task)
            
        }
}