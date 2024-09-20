import { Component, INJECTOR, Input} from "@angular/core";

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
//     ngOnInit(){
//         const randomNum = this.generateRandomNumber();
//         // this.selectedUser = DUMMY_USERS[randomNum];
//         this.selectedUser = signal(DUMMY_USERS[randomNum]);//Initialize signal
//         //When this values changes, signal notifies angular to update the view 
//         //wherever this variable is being used, angular updates that part
//     }
//     // get getImagePath() {
//     //     return 'assets/users/' + this.selectedUser.avatar;
//     // }
//     public imagepath = computed(() => 'assets/users/' + this.selectedUser().avatar);
//     public onSelectUser(): void {
//         this.selectedUser.set(DUMMY_USERS[this.generateRandomNumber()]);//Update signal with set()
//     }
//     public generateRandomNumber() {
//         return Math.floor(Math.random()*DUMMY_USERS.length);
//     }

//     public selectedUser: any;
//     // public imagePathSignal = signal('');

//     ngOnInit(){
//         const randomNum = this.generateRandomNumber();
//         // this.selectedUser = DUMMY_USERS[randomNum];
//         this.selectedUser = signal(DUMMY_USERS[randomNum]);//Initialize signal
//         //When this values changes, signal notifies angular to update the view 
//         //wherever this variable is being used, angular updates that part
//     }

//     // get getImagePath() {
//     //     return 'assets/users/' + this.selectedUser.avatar;
//     // }

//     public imagepath = computed(() => 'assets/users/' + this.selectedUser().avatar);

//     public onSelectUser(): void {
//         this.selectedUser.set(DUMMY_USERS[this.generateRandomNumber()]);//Update signal with set()
//     }
//     public generateRandomNumber() {
//         return Math.floor(Math.random()*DUMMY_USERS.length);
//     }

 @Input() avatar!: string;//! to specify angular that the property will definitely be assigned some string value from outside
 @Input() name!: string;

 get imagepath() {
    return 'assets/users/' + this.avatar;
 }
 onSelectUser() {
    throw new Error('Method not implemented.');
    }

 }