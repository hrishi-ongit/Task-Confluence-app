import { NgModule } from "@angular/core";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { TaskComponent } from "./task.component";
import { UserTaskComponent } from "./user-task/user-task.component";
import { SharedModule } from "../shared/module/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[TaskComponent, CreateTaskComponent, UserTaskComponent],
    exports: [TaskComponent],
    imports:[CommonModule, FormsModule ,SharedModule]
})
export class TaskModule{

}