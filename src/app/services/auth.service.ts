import {User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  public user: User;
  constructor(public afAuth: AngularFireAuth,
              public router: Router,
              public http: HttpClient) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }
  public async login(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          const user = JSON.parse(localStorage.getItem('user'));
          if (user != null) {
            this.router.navigate(['board']);
          } else {
            this.router.navigate(['login']);
          }
        });
    } catch (e) {
      console.log(e.message);
    }
  }

  public async register(email: string, password: string) {
    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          const user = JSON.parse(localStorage.getItem('user'));
          if (user != null) {
            this.router.navigate(['board']);
          } else {
            this.router.navigate(['register']);
          }
        });
    } catch (e) {
      console.log(e.message);
    }
  }
  public async logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
      localStorage.removeItem('user');
    });
  }
  public get isLoggedIn(): any {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}
