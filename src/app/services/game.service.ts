import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {Subject} from 'rxjs';

@Injectable()
export class GameService {
  // Fields
  private websocketEndpoint = 'http://localhost:8080/ws';
  private stompClient: any;
  private topic = '/app/topic';
  private game: any[];
  public gameChanged = new Subject<any[]>();
  constructor() {
  }
  public _connect() {
    // Connect to websocket
    console.log('Initialize Websocket Connection');
    const ws = new SockJS(this.websocketEndpoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    this.stompClient.connect({}, function(frame) {
      console.log('Connected to the server');
      _this.stompClient.subscribe(_this.topic, function(sdkEvent) {
        _this.onMessageReceived(sdkEvent);
      });
      _this.stompClient.subscribe('/topic/array', function(sdkEvent) {
        if (sdkEvent != null) {
          const game: any[] = JSON.parse(sdkEvent.body);
          _this.gameChanged.next(game.slice());
          _this.game = game;
          console.log(game);
        }
      });
    }, this.errorCallBack);
  }
  public errorCallBack(error) {
    console.log('errorCallBack -> ' + error);
    setTimeout(() => {
      this._connect();
    }, 2000);
  }
  public onMessageReceived(message) {
    console.log('Message Recieved from Server :: ' + message);
  }
  public async _disconnect() {
    // Disconnect from the websocket
    if (this.stompClient !== null) {
      await this.stompClient.disconnect();
    }
    console.log('Disconnected');
  }
  public makeMove(idx: number) {
    // Send move to other player
  }
  public startNewGame() {
    // Start new game
  }
  public leaveGame() {
    // Leave the game
  }
}
