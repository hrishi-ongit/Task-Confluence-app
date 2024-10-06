import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  @Input() taskIndex: string = '';
  @Output() cancleTask =  new EventEmitter;
  

  public OnCancleCreateTask(): void {
    this.cancleTask.emit();
  }

}
