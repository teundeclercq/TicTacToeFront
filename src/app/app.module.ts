import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {firebaseConfig} from './app-firebase.module';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './services/auth.guard';
import {GameService} from './services/game.service';
import { HighscoreComponent } from './highscore/highscore.component';
import {HighscoreService} from './services/highscore.service';
import {ApiurlService} from './services/apiurl.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    SquareComponent,
    BoardComponent,
    HighscoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, GameService, HighscoreService, ApiurlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
