import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UserTaskComponent } from "./user-task/user-task.component";
import { NgFor } from '@angular/common';
import { UserComponent } from "../user/user.component";
import { CreateTaskComponent } from "./create-task/create-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [UserTaskComponent, NgFor, UserComponent, CreateTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  
  @Input() taskOwner!: string;
  @ViewChild('scrollableTasks') public scrollableTasks!: ElementRef;
  

  public tasks =[
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    }  
  ]
  public addNewTask: boolean = false;
  public newTask:string[] = [];

  public deleteTask(id: string): void {
    this.tasks = this.tasks.filter(tsk => tsk.id !== id);
  }

  public onAddNewTask(): void {
  //  this.newTask.push((this.newTask.length+1).toString());
  //  this.scrollToBottom();
  this.addNewTask = true;
  }
  public onCancleTask(): void {
    this.addNewTask = false;
    }
  
  
  // private scrollToBottom(): void {
  //   setTimeout(() => {
  //     const scrlContainer = this.scrollableTasks.nativeElement;
  //     scrlContainer.scrollTop = scrlContainer.scrollHeight;
  //   },0)
  // }

}
