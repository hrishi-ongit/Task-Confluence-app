import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/module/shared.module';
import { TaskModule } from './task/task.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
  ],
  //declarations include all the components used in app those are Modules type (non standalone)
  bootstrap: [AppComponent],
  //bootstrapping is adding the entrypoint in application
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    TaskModule
  ],
  //Imports array for including standalone components as well as other modules(browserModule)
  //other modules in the sense..ex in CreateTaskComponent's import, FormsMoudle is added to Imports
})
export class AppModule {}
