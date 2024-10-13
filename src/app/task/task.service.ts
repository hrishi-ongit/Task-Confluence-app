import { JsonPipe } from "@angular/common";
import { DUMMY_USERS } from "../dummy-users";
import { ITask } from "../shared/shared.interface";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TaskService {
    
  getUserTasks(taskOwner: string): ITask[] {
    return JSON.parse(
      JSON.stringify(
        DUMMY_USERS.find((user) => user.name === taskOwner)?.tasks || []
      )
    );
  }

  deleteTask(id: string, taskOwner: string): ITask[] {
    const currentUser = DUMMY_USERS.find((user) => user.name === taskOwner);
    if (currentUser) {
      currentUser.tasks = currentUser.tasks.filter((tsk) => tsk.id !== id);
      return JSON.parse(JSON.stringify(currentUser.tasks));
    }
    return [];
  }

  updateUserTask(taskData: ITask, taskOwner: string): ITask[] {
    const currentUser = DUMMY_USERS.find((user) => user.name === taskOwner);
    if(currentUser){
        currentUser.tasks.push(taskData);
    }
    return JSON.parse(JSON.stringify(currentUser?.tasks));
  }
  
}