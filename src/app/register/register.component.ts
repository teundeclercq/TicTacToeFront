import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Player} from '../models/player.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fireAuth: AuthService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
  }
  register(email: string, password: string) {
    this.fireAuth.register(email, password).then(() => {
      this.router.navigate(['board']);
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      this.http.post('http://localhost:8080/player/', {id: user.uid, email: user.email}).subscribe(
        (response) => {
          console.log(response);
        }, error => {
          console.log(error);
        });
    });
  }

}
