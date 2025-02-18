import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../services/game.service';
import {Move} from '../models/move.model';
import {Button} from '../models/button.enum';
import {Player} from '../models/player.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnDestroy{
  squares: any[];
  xIsNext: boolean;
  winner: string;
  player: any;
  playerTurn: any;
  move: Move;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    // this.NewGame();
    this.gameService._connect();
    this.gameService.gameChanged.subscribe((game: any[]) => {
      this.squares = game;
    });
    this.gameService.playersChanged.subscribe((player: Player) => {
        this.player = player.playerFiguur;
    });
    this.gameService.squaresField.subscribe((field: any[]) => {
      this.squares = field;
    });
    this.gameService.winner.subscribe((winner: any) => {
      this.winner = winner;
    });
  }

  public NewGame() {
    this.gameService.startNewGame();
    this.winner = null;
    this.xIsNext = true;
  }
  public makeMove(idx: number) {
    this.gameService.makeMove(idx);
  }

  private calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] &&
          this.squares[a] === this.squares[b] &&
          this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

  ngOnDestroy() {
    this.gameService._disconnect();
  }
}
