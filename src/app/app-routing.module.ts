import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {BoardComponent} from './board/board.component';
import {AuthGuard} from './services/auth.guard';
import {HighscoreComponent} from './highscore/highscore.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'board', component: BoardComponent, canActivate: [AuthGuard]},
  {path: 'highscore', component: HighscoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
