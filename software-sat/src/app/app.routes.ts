import { Routes } from '@angular/router';
import { HomeComponent } from './tasks/home/home-component/home.component';
import { CreateTaskComponent } from './tasks/create-task/criacao-itens-component/create-task.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list-component/tasks-list.component';

export const routes: Routes = [   
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "create-task",
        component: CreateTaskComponent
    },
    {
        path: "get-tasks",
        component: TasksListComponent
    }
];
