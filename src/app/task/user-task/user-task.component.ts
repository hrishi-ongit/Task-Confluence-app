import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from '../../shared/shared.interface';

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})

export class UserTaskComponent {

  @Input() task!: TaskType;
  @Output() selectedTask = new EventEmitter<string>();

  public deleteTask() {
  this.selectedTask.emit(this.task.id);
}

}
