import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { IUser } from '../shared/shared.interface';
import { NgClass } from '@angular/common';
import { CardComponent } from "../shared/card/card.component";
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgClass, CardComponent, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {

  constructor(private router: Router){
   
  }

  @Input({required: true}) user!: IUser;
  @Input() highlightSelected: boolean = false;
  @Output() selectedUser = new EventEmitter<string>();

  get imagepath() {
    // return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.user.avatar;
  }

  selectUser() {
    // this.selectedUser.emit(this.id);
    this.selectedUser.emit(this.user.id);
    this.router.navigate(['/user-task', this.user.name]);
  }
}
