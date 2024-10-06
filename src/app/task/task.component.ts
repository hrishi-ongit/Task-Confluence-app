import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UserTaskComponent } from "./user-task/user-task.component";
import { NgFor } from '@angular/common';
import { UserComponent } from "../user/user.component";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { type TaskType } from '../shared/shared.interface';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [UserTaskComponent, NgFor, UserComponent, CreateTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() taskOwner!: string;
  @ViewChild('scrollableTasks') public scrollableTasks!: ElementRef;

  public tasks = [
    {
      "id": "t1",
      "userId": "u1",
      "title": "Master Angular",
      "summary": "Learn all the basic and advanced features of Angular & how to apply them.",
      "dueDate": "2025-12-31",
      "createdOn": "2024-01-01"
  },
  {
      "id": "t2",
      "userId": "u3",
      "title": "Build first prototype",
      "summary": "Build a first prototype of the online shop website",
      "dueDate": "2024-05-31",
      "createdOn": "2024-01-01"
  },
  {
      "id": "t3",
      "userId": "u3",
      "title": "Prepare issue template",
      "summary": "Prepare and describe an issue template which will help with project management",
      "dueDate": "2024-06-15",
      "createdOn": "2024-01-01"
  },
  {
      "id": "t13",
      "userId": "xu1",
      "title": "< No Title >",
      "summary": "< No Summary >",
      "dueDate": "2024-10-31",
      "createdOn": "2024-01-01"
  }
  ];
  public addNewTask: boolean = false;
  public newTask: string[] = [];
  public dateOfCreation: string = '';

  public deleteTask(id: string): void {
    this.tasks = this.tasks.filter((tsk) => tsk.id !== id);
  }

  public onAddNewTask(): void {
    //  this.newTask.push((this.newTask.length+1).toString());
    //  this.scrollToBottom();
    this.addNewTask = true;
  }
  public onCancleTask(): void {
    this.addNewTask = false;
  }

  public onCreateTask(taskData: TaskType): void {
    console.log('Due date : ', taskData.dueDate);
    this.tasks.push(taskData);
    this.addNewTask = false;
    this.scrollToBottom();//I use this to forcefully scroll to bottom of overflow view to focus the new task added
    // window.location.reload();..this is used to reload the entire app..cab be used when form submit data is connected to db 
    // this.router.navigate(['/']);
  }
  
  //HK</> To hard scoll to the bottom
  // private scrollToBottom(): void {
  //   setTimeout(() => {
  //     const scrlContainer = this.scrollableTasks.nativeElement;
  //     scrlContainer.scrollTop = scrlContainer.scrollHeight;
  //   },0)
  // }
    
  // }

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
