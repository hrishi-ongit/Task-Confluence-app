import { Routes } from "@angular/router"
import { AppComponent } from "./app.component"
import { UserComponent } from "./user/user.component"
import { TaskComponent } from "./task/task.component"

export const routes: Routes = [
    {
        path: 'home', //landing page
        component: AppComponent,
        pathMatch: 'full'
    },
    {
        path: '', //empty path redirects to home
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'user-task/:id', 
        component: UserComponent,
    },

]