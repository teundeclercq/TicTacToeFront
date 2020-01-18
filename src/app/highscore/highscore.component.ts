import { Component, OnInit } from '@angular/core';
import {GameSession} from '../models/game-session.model';
import {HighscoreService} from '../services/highscore.service';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {
  private gameSessions: GameSession[] = [];
  constructor(private highscoreService: HighscoreService) { }

  ngOnInit() {
    this.highscoreService.getGameSessions();
    this.highscoreService.gameSessionsChanged.subscribe((res: GameSession[]) => {
      this.gameSessions = res;
      console.log(this.gameSessions);
    });
  }

}
