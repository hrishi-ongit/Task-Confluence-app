// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
// This is the way to set the entry point of the component while working with 
//Standalone component, for Modules this is not the way

//For Module application, this is the way of defining entrypoints
import { platformBrowser } from "@angular/platform-browser";
import { AppModule } from "./app/app.module";
platformBrowser().bootstrapModule(AppModule);

