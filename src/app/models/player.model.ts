import {Button} from './button.enum';

export class Player {
  public id: string;
  public email: string;
  public canMove: boolean;
  public playerFiguur: Button;
  public playerTurn: Button;
  constructor(id: string, email: string, canMove: boolean, playerFiguur?: Button, playerTurn?: Button) {
    this.id = id;
    this.email = email;
    this.canMove = canMove;
    this.playerFiguur = playerFiguur;
    this.playerTurn = playerTurn;
  }
}
