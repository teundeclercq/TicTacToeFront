import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {AppComponent} from '../app.component';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {SquareComponent} from '../square/square.component';
import {BoardComponent} from '../board/board.component';
import {HighscoreComponent} from '../highscore/highscore.component';
import {DebugElement} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AppRoutingModule} from '../app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {firebaseConfig} from '../app-firebase.module';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HttpClientModule} from '@angular/common/http';
import {GameService} from '../services/game.service';
import {ApiurlService} from '../services/apiurl.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de: DebugElement;
  let inj: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig.firebaseConfig),
        AngularFireAuthModule
      ],
      declarations: [ AppComponent,
        HeaderComponent,
        LoginComponent,
        RegisterComponent,
        SquareComponent,
        BoardComponent,
        HighscoreComponent ],
      providers: [AuthService, GameService, ApiurlService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    inj = de.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
