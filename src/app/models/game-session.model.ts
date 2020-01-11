export class GameSession {
  private Id: number;
  private PlayerO: string;
  private PlayerX: string;
  private PlayerWhoWon: string;
  private TimePlayed: Date;
  constructor(id: number, playerO: string, playerX: string, playerWhoWon: string, timePlayed: Date) {
    this.Id = id;
    this.PlayerO = playerO;
    this.PlayerX = playerX;
    this.PlayerWhoWon = playerWhoWon;
    this.TimePlayed = timePlayed;
  }
  get id(): number {
    return this.Id;
  }

  get playerO(): string {
    return this.PlayerO;
  }

  get playerX(): string {
    return this.PlayerX;
  }

  get playerWhoWon(): string {
    return this.PlayerWhoWon;
  }

  get timePlayed(): Date {
    return this.TimePlayed;
  }
}
