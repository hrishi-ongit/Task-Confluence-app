import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

// type User = {
//   id: string,
//   avatar: string,
//   name: string
// }

interface User {
  id: string,
  avatar: string,
  name: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {

  @Input({required: true}) user!: User;
  @Output() selectedUser = new EventEmitter<string>();

  get imagepath() {
    // return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    // this.selectedUser.emit(this.id);
    this.selectedUser.emit(this.user.id);
  }
}
