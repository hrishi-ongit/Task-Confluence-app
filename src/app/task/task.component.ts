import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { UserTaskComponent } from "./user-task/user-task.component";
import { JsonPipe, NgFor } from '@angular/common';
import { UserComponent } from "../user/user.component";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { IUser, type ITask } from '../shared/shared.interface';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [UserTaskComponent, NgFor, UserComponent, CreateTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnChanges {
  @Input() taskOwner!: string;
  @ViewChild('scrollableTasks') public scrollableTasks!: ElementRef;
  public tasks: ITask[] = [];

  public addNewTask: boolean = false;
  public newTask: string[] = [];
  public dateOfCreation: string = '';

  ngOnChanges(): void {
    this.tasks = JSON.parse(JSON.stringify((DUMMY_USERS.find(user => user.name === this.taskOwner))?.tasks || []));
  }

  public deleteTask(id: string): void {
    const currentUser = DUMMY_USERS.find(user => user.name === this.taskOwner);
    if (currentUser) {
      currentUser.tasks = currentUser.tasks.filter(tsk => tsk.id !== id);
      this.tasks = JSON.parse(JSON.stringify(currentUser.tasks));
    }
  }

  public onAddNewTask(): void {
    this.addNewTask = true;
  }
  public onCancleTask(): void {
    this.addNewTask = false;
  }

  public onCreateTask(taskData: ITask): void {
    console.log('Due date : ', taskData.dueDate);
    this.tasks.push(taskData);
    const currentUser = DUMMY_USERS.find(user => user.name === this.taskOwner);
    if (currentUser) {
      currentUser.tasks = JSON.parse(JSON.stringify(this.tasks));
    }
    this.addNewTask = false;
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    const scrlContainer = this.scrollableTasks.nativeElement;
    const startPosition = scrlContainer.scrollTop;//the current scroll position
    const targetPosition = scrlContainer.scrollHeight;//the complete scrollable height
    const distance = targetPosition - startPosition;
    const duration = 500; // Duration of the scroll animation in milliseconds
    const stepTime = 10; // Interval time in milliseconds

    //Step distance
    const stepDistance = distance / (duration / stepTime); 
    /*Calculate the distance to scroll at each step
    duration / stepTime gives the total number of steps in which the scrolling will be completed. 
    For example, if duration = 1000ms and stepTime = 10ms, there will be 100 steps.
    distance / (duration / stepTime) divides the total distance by the total number of steps, 
    giving you the distance that needs to be scrolled in each step. 
    So, it ensures that the scrolling will smoothly cover the total distance within the given duration.*/

    //Track
    let currentStep = 0;//this is a flag to know how many steps are completed

    /*
    totalSteps: This represents how many steps the scrolling action 
    should take to complete. This is simply the number of steps 
    derived from dividing the total duration by the time per step (duration / stepTime).
    */
    const totalSteps = duration / stepTime;

    const scrollInterval = setInterval(() => {
        currentStep += 1;
        scrlContainer.scrollTop += stepDistance;

        // Stop when the scroll has reached the target or completed the steps
        /*
        currentStep >= totalSteps: If the number of steps has reached the total planned steps, the scrolling will stop. This ensures the scrolling doesn't exceed the desired time (duration).
        scrlContainer.scrollTop >= targetPosition: If the scroll position has reached (or exceeded) the target scroll position, the scrolling will stop.
        clearInterval(scrollInterval);: This stops the setInterval function and thus halts the scrolling action.
        */
        if (currentStep >= totalSteps || scrlContainer.scrollTop >= targetPosition) {
            clearInterval(scrollInterval);
        }
    }, stepTime);
}

}
