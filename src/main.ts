import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { config } from './app/app.config';

bootstrapApplication(AppComponent, config).catch((err) => console.error(err));

// cutshort below to ⬆
// bootstrapApplication(AppComponent,{
//     providers: [provideRouter(routes)]
// }).catch((err) => console.error(err));


// cutshort below to ⬆
// bootstrapApplication(AppComponent,{
//     providers: [provideRouter([
//         {
//             path: 'tasks', //domain/tasks
//             component: TaskComponent,
//         }
//     ])]
// }).catch((err) => console.error(err));
