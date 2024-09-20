import { Component, computed, Signal, signal } from "@angular/core";
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

 //Use of signals in user component
 export class UserComponent{
    public selectedUser: any;
    // public imagePathSignal = signal('');

    ngOnInit(){
        const randomNum = this.generateRandomNumber();
        // this.selectedUser = DUMMY_USERS[randomNum];
        this.selectedUser = signal(DUMMY_USERS[randomNum]);//Initialize signal
        //When this values changes, signal notifies angular to update the view 
        //wherever this variable is being used, angular updates that part
    }

    // get getImagePath() {
    //     return 'assets/users/' + this.selectedUser.avatar;
    // }

    public imagepath = computed(() => 'assets/users/' + this.selectedUser().avatar);

    public onSelectUser(): void {
        this.selectedUser.set(DUMMY_USERS[this.generateRandomNumber()]);//Update signal with set()
    }
    public generateRandomNumber() {
        return Math.floor(Math.random()*DUMMY_USERS.length);
    }

 }