import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {GameService} from '../services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private gameService: GameService) { }

  ngOnInit() {
  }

  public userLoggedIn() {
    return this.authService.isLoggedIn;
  }
  public logoutUser() {
    this.authService.logout();
  }

}
