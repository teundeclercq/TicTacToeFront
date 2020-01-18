import {Injectable} from '@angular/core';

@Injectable()
export class ApiurlService {
  private _API_URL_DEV_WS = 'http://localhost:8080/ws';
  private _API_URL_DEV_REST = 'http://localhost:8080/';
  private _API_URL_LIVE_REST = 'https://tomcat.teun-school.nl/TicTacToeBackEnd/';
  private _API_URL_LIVE_WS = 'https://tomcat.teun-school.nl/TicTacToeBackEnd/ws/';
  get API_URL_LIVE_REST(): string {
    return this._API_URL_LIVE_REST;
  }
  get API_URL_LIVE_WS(): string {
    return this._API_URL_LIVE_WS;
  }
  get API_URL_DEV_WS(): string {
    return this._API_URL_DEV_WS;
  }
  get API_URL_DEV_REST(): string {
    return this._API_URL_DEV_REST;
  }
}
