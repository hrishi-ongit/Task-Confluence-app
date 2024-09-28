import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

// const randomNum = Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

//Use of signals in user component
export class UserComponent {
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
  
  

  //simple @Input method
  @Input({required : true})  id!: string;
  @Input({required : true}) avatar!: string; //! to specify angular that the property will definitely be assigned some string value from outside
  @Input({required : true}) name!: string;
  //accepting input with signal
  //  avatar = input<string>();//input is a special function that is compatible with signal
   //input function produces a signal
  //  avatar = input.required<string>();
  //  name = input.required<string>();
   

  @Output() selectedUser = new EventEmitter<string>();//old method
  //We can use..new Eventemitter() without type, but in app com, in one of the event
  //we are strictly expecting string value, so better use <string>

  // selectedUser = output<string>();//This is not a signal, it still the same above
  //here no need to set new emmiter class, its done in background
  // this may be brought up just to eleminate the decorator(which is there in @input) to match just 



  get imagepath() {
    return 'assets/users/' + this.avatar;
  }
  // imagepath = computed(() => 'assets/users/'+this.avatar())



  onSelectUser() {
    this.selectedUser.emit(this.id);
  }
}
