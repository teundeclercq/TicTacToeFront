import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareComponent } from './square.component';
import {AppComponent} from '../app.component';
import {HeaderComponent} from '../header/header.component';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {BoardComponent} from '../board/board.component';
import {HighscoreComponent} from '../highscore/highscore.component';
import {AppRoutingModule} from '../app-routing.module';

describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule
      ],
      declarations: [ AppComponent,
        HeaderComponent,
        LoginComponent,
        RegisterComponent,
        SquareComponent,
        BoardComponent,
        HighscoreComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
