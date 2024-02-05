import { Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';

export const routes: Routes = [
    {
        path: 'userManagement/:setmode', component: LoginComponent
    },
];

