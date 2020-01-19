import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import {AppComponent} from '../app.component';
import {HeaderComponent} from '../header/header.component';
import {LoginComponent} from '../login/login.component';
import {SquareComponent} from '../square/square.component';
import {BoardComponent} from '../board/board.component';
import {HighscoreComponent} from '../highscore/highscore.component';
import {AuthService} from '../services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {DebugElement} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {firebaseConfig} from '../app-firebase.module';
import {AngularFireAuthModule} from '@angular/fire/auth';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let de: DebugElement;
  let inj: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
                AppRoutingModule,
                AngularFireModule.initializeApp(firebaseConfig.firebaseConfig),
                AngularFireAuthModule],
      declarations: [ AppComponent,
        HeaderComponent,
        LoginComponent,
        RegisterComponent,
        SquareComponent,
        BoardComponent,
        HighscoreComponent ],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    inj = de.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
