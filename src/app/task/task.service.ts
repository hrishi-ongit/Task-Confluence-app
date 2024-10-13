import { DUMMY_USERS } from "../dummy-users";
import { ITask } from "../shared/shared.interface";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TaskService {
  public userData = DUMMY_USERS;
  constructor() {
    const userData = localStorage.getItem('usersData');
    if(userData) this.userData = JSON.parse(userData);
  }

  getUserTasks(taskOwnerName: string): ITask[] {
    return JSON.parse(
      JSON.stringify(
        this.userData.find((user) => user.name === taskOwnerName)?.tasks || []
      )
    );
  }

  deleteTask(id: string, taskOwnerName: string): ITask[] {
    const currentUser = this.userData.find(
      (user) => user.name === taskOwnerName
    );
    if (currentUser) {
      currentUser.tasks = currentUser.tasks.filter((tsk) => tsk.id !== id);
      this.saveUsersToLocalStorage();
      return JSON.parse(JSON.stringify(currentUser.tasks));
    }
    return [];
  }

  updateUserTask(taskData: ITask, taskOwnerName: string): ITask[] {
    const currentUser = this.userData.find(
      (user) => user.name === taskOwnerName
    );
    if (currentUser) {
      currentUser.tasks.push(taskData);
    }
    this.saveUsersToLocalStorage();
    return JSON.parse(JSON.stringify(currentUser?.tasks));
  }

  private saveUsersToLocalStorage(): void {
    localStorage.setItem('usersData', JSON.stringify(this.userData))
  }
}