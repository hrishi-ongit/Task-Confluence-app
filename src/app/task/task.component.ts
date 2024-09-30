import { Component, Input } from '@angular/core';
import { UserTaskComponent } from "./user-task/user-task.component";
import { NgFor } from '@angular/common';
import { UserComponent } from "../user/user.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [UserTaskComponent, NgFor, UserComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() taskOwner!: string;
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

}
