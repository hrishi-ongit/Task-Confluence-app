import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent, TaskComponent, NgFor, NgIf, RouterOutlet]
})

export class AppComponent {
    public users = DUMMY_USERS;
    public taskOwnerName: string ='';
    public taskOwnerId: string ='';
    onSelectUser(id:string){
        const userName = this.users.find(user => user.id === id);
        this.taskOwnerName = userName?.name || '';
        this.taskOwnerId = userName?.id || '';
    }
    clearUser() {
    this.taskOwnerName = '';
    }
}
