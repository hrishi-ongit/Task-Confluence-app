import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskType } from '../../shared/shared.interface';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  @Input() taskIndex: string = '';
  @Output() cancleTask =  new EventEmitter;
  @Output() createTask =  new EventEmitter<TaskType>();
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
    console.log({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
    console.log('task submitted');
    //send the new task to be added in tasks array
    this.createTask.emit({
      id: this.enteredTitle,
      userId: 'xu1',
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.getDate()
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
