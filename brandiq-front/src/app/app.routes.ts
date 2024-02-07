import { Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { UserProfileComponent } from './components/authentication/user-profile/user-profile.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: UserProfileComponent },
];
