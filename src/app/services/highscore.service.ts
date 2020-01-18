import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {GameSession} from '../models/game-session.model';
import {HttpClient} from '@angular/common/http';
import {ApiurlService} from './apiurl.service';

@Injectable()
export class HighscoreService {
  public gameSessionsChanged = new Subject<GameSession[]>();
  constructor(private http: HttpClient,
              private apiurlService: ApiurlService) {
  }
  public getGameSessions() {
    this.http.get(`${this.apiurlService.API_URL_LIVE_REST}gamesessions/`)
      .subscribe((response: GameSession[]) => {
        this.gameSessionsChanged.next(response.slice());
      });
  }
}
