import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SquareComponent} from './square/square.component';
import {BoardComponent} from './board/board.component';
import {HighscoreComponent} from './highscore/highscore.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth.guard';
import {GameService} from './services/game.service';
import {HighscoreService} from './services/highscore.service';
import {ApiurlService} from './services/apiurl.service';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {firebaseConfig} from './app-firebase.module';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig.firebaseConfig),
        AngularFireAuthModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        RegisterComponent,
        SquareComponent,
        BoardComponent,
        HighscoreComponent
      ],
      providers: [AuthService, AuthGuard, GameService, HighscoreService, ApiurlService],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
