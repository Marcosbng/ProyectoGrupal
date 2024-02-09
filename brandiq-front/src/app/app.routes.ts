import { Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RulesComponent } from './components/rules/rules.component';
import { BoardComponent } from './components/board/board.component';

import { RegisterComponent } from './components/authentication/register/register.component';
import { UserProfileComponent } from './components/authentication/user-profile/user-profile.component';

export const routes: Routes = [
  { path: 'rules', component: RulesComponent },
  { path: 'board', component: BoardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserProfileComponent },
];

