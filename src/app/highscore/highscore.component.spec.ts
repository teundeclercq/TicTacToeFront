import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighscoreComponent } from './highscore.component';
import {HighscoreService} from '../services/highscore.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DebugElement} from '@angular/core';
import {ApiurlService} from '../services/apiurl.service';

describe('HighscoreComponent', () => {
  let component: HighscoreComponent;
  let fixture: ComponentFixture<HighscoreComponent>;
  let de: DebugElement;
  let inj: HighscoreService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ HighscoreComponent],
      providers: [HighscoreService, ApiurlService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighscoreComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    inj = de.injector.get(HighscoreService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
