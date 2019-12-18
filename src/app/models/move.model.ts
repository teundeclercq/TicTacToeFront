import {Button} from './button.enum';
import {Player} from './player.model';

export class Move {
  private _id: number;
  private _player: Player;
  constructor(id: number, player: Player) {
    this._id = id;
    this._player = player;
  }
  get id(): number {
    return this._id;
  }

  get player(): Player {
    return this._player;
  }
}
