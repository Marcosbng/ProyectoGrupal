import { Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RulesComponent } from './components/rules/rules.component';
import { BoardComponent } from './components/board/board.component';

export const routes: Routes = [
    {
        path: 'userManagement/:setmode', component: LoginComponent
    },
    {
        path: 'rules', component: RulesComponent
    },
    {
        path: 'board', component: BoardComponent
    },
];

