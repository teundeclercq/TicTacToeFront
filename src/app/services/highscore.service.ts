import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {GameSession} from '../models/game-session.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HighscoreService {
  private URL = 'http://localhost:8080/';
  public gameSessionsChanged = new Subject<GameSession[]>();
  constructor(private http: HttpClient) {
  }
  public getGameSessions() {
    this.http.get(`${this.URL}gamesessions/`)
      .subscribe((response: GameSession[]) => {
        this.gameSessionsChanged.next(response.slice());
      });
  }
}
