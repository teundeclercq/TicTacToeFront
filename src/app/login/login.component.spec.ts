import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AuthService} from '../services/auth.service';
import {AngularFireModule} from '@angular/fire';
import {firebaseConfig} from '../app-firebase.module';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AppRoutingModule} from '../app-routing.module';
import {RegisterComponent} from '../register/register.component';
import {BoardComponent} from '../board/board.component';
import {HighscoreComponent} from '../highscore/highscore.component';
import {DebugElement} from '@angular/core';
import {AppComponent} from '../app.component';
import {HeaderComponent} from '../header/header.component';
import {SquareComponent} from '../square/square.component';
import {HttpClientModule} from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let inj: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(firebaseConfig.firebaseConfig),
        AngularFireAuthModule,
        AppRoutingModule,
        HttpClientModule,
      ],
      declarations: [ AppComponent,
        HeaderComponent,
        LoginComponent,
        RegisterComponent,
        SquareComponent,
        BoardComponent,
        HighscoreComponent],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    inj = de.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
