import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import {AppComponent} from '../app.component';
import {HeaderComponent} from '../header/header.component';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {SquareComponent} from '../square/square.component';
import {HighscoreComponent} from '../highscore/highscore.component';
import {DebugElement} from '@angular/core';
import {GameService} from '../services/game.service';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ApiurlService} from '../services/apiurl.service';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let de: DebugElement;
  let inj: GameService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule,
        HttpClientModule],
      declarations: [ AppComponent,
        HeaderComponent,
        LoginComponent,
        RegisterComponent,
        SquareComponent,
        BoardComponent,
        HighscoreComponent ],
      providers: [GameService, ApiurlService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    inj = de.injector.get(GameService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
