import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {Subject} from 'rxjs';
import {Player} from '../models/player.model';
import {Move} from '../models/move.model';
import {Button} from '../models/button.enum';

@Injectable()
export class GameService {
  // Fields
  private websocketEndpoint = 'http://localhost:8080/ws';
  private stompClient: any;
  private topic = '/app/topic';
  private squares: any[];
  private players: any[];
  private player: Player;
  public squaresField = new Subject<any[]>();
  public gameChanged = new Subject<any[]>();
  public winner = new Subject<any>();
  public playersChanged = new Subject<Player>();

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
      _this.stompClient.subscribe(`/topic/register/${JSON.parse(localStorage.getItem('user')).uid}`, function(sdkEvent) {
        if (sdkEvent != null) {
          localStorage.setItem('Enemy', sdkEvent.body);
          let player: Player = JSON.parse(sdkEvent.body);
          _this.playersChanged.next(player);
          _this.player = player;
          _this.squares = Array(9).fill(null);
          _this.squaresField.next(_this.squares.slice());
          console.log(_this.squares);
          console.log(_this.playersChanged);
        }
      });
      _this.stompClient.subscribe(`/topic/receiveMove/${JSON.parse(localStorage.getItem('user')).uid}`, function(sdkEvent) {
        if (sdkEvent != null) {
          let move: Move = JSON.parse(sdkEvent.body);
          _this.squares[move.id] = move.player.playerFiguur;
          _this.player.canMove = true;
          _this.playersChanged.next(_this.player);
          _this.squaresField.next(_this.squares.slice());
        }
      });
      _this.stompClient.subscribe(`/topic/receiveWinner/${JSON.parse(localStorage.getItem('user')).uid}`, function(sdkEvent) {
        if (sdkEvent != null) {
           _this.winner.next(sdkEvent.body);
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
    let item = JSON.parse(message.body);
    let _this = this;
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
    if (this.player.canMove) {
      if (this.squares[idx] == null) {
        this.squares[idx] = this.player.playerFiguur;
        this.squaresField.next(this.squares.slice());
        this.stompClient
          .send(`/app/makeMove/${JSON.parse(localStorage.getItem('Enemy')).id}`,
            {},
            JSON.stringify({id: idx, player: this.player}));
        this.player.canMove = false;
        this.playersChanged.next(this.player);
      }
    }
  }
  public startNewGame() {
    // Start new game
    const id = JSON.parse(localStorage.getItem('user')).uid;
    const email = JSON.parse(localStorage.getItem('user')).email;
    const player = new Player(id, email, false);
    this.stompClient.send('/app/register', {}, JSON.stringify(player));
  }
  public leaveGame() {
    // Leave the game
  }
}
