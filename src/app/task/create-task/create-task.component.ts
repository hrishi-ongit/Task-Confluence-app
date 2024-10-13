import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type ITask } from '../../shared/shared.interface';
import { TaskComponent } from '../task.component';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule, TaskComponent],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  constructor(private _taskComponent: TaskComponent){
  }

  @Input() taskIndex: string = '';
  @Output() cancleTask =  new EventEmitter;
  @Output() createTask =  new EventEmitter<ITask>();
  public enteredTitle: string = '';
  public enteredSummary: string = '';
  public enteredDate: string = '';

  //directives using signals
  // public enteredTitle = signal('');
  // public enteredSummary = signal('');
  // public enteredDate = signal('');

  public OnCancleCreateTask(): void {
    this.cancleTask.emit();
  }

  public onSubmit(): void {
    this.createTask.emit({
      id: 't1' + this._taskComponent.tasks.length ,
      userId: 'xu1',
      title: this.enteredTitle || '< No Title >',
      summary: this.enteredSummary || '< No Summary >',
      dueDate: this.enteredDate,
      createdOn: this.getDate()
    });
  }
  private getDate(): string {
    const month = new Date().getMonth()+1 < 10 ? new Date().getMonth().toString().padStart(2,'0') : (new Date().getMonth()+1).toString();
    const day = new Date().getDate() < 10 ? new Date().getDate().toString().padStart(2,'0') : new Date().getDate().toString();
    const year = (new Date().getFullYear()).toString();
    console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`
  }

}
