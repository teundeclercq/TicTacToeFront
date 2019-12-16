import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fireAuth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  register(email: string, password: string) {
    this.fireAuth.register(email, password).then(() => {
      this.router.navigate(['board']);
    });
  }

}
