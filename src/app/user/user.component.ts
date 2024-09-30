import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { UserType } from '../shared/shared.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgClass],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {

  @Input({required: true}) user!: UserType;
  @Input() highlightSelected: boolean = false;
  @Output() selectedUser = new EventEmitter<string>();

  get imagepath() {
    // return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.user.avatar;
  }

  selectUser() {
    // this.selectedUser.emit(this.id);
    this.selectedUser.emit(this.user.id);
  }
}
