import { Component } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
import { publishFacade } from "@angular/compiler";

// const randomNum = Math.floor(Math.random()*DUMMY_USERS.length);

 @Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl:'./user.component.css'
 })

 export class UserComponent{
    public selectedUser: any;

    ngOnInit(){
        const randomNum = this.generateRandomNumber();
        this.selectedUser = DUMMY_USERS[randomNum];
    }

    get getImagePath() {
        return 'assets/users/' + this.selectedUser.avatar;
    }

    public onSelectUser(): void {
        this.selectedUser = DUMMY_USERS[this.generateRandomNumber()];
    }
    public generateRandomNumber() {
        return Math.floor(Math.random()*DUMMY_USERS.length);
    }

 }