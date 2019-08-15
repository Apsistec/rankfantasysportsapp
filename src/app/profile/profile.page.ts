import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from '@angular/router';
import { ThemeService } from '../core/services/theme.service';
import { User } from '../core/models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
const themes = {
  autumn: {
    primary: '#F78154',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#B89876'
  },
  night: {
    primary: '#8CBA80',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    medium: '#BCC2C7',
    dark: '#F7F7FF',
    light: '#495867'
  },
  neon: {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#F4EDF2',
    medium: '#B682A5',
    dark: '#34162A'
  }
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  loading = false;
  subscription;
  user$: Observable<any>;
  // userData: any;
  results;
  constructor(
    public auth: AuthService,
    public functions: AngularFireFunctions,
    private router: Router,
    private theme: ThemeService,
    private afAuth: AngularFireAuth
  ) {
  }


  ngOnInit() {
    this.loading = false;
  }

  getUser() {
    return this.user$.pipe(first()).toPromise();
  }
  // async getUser() {
  //   await this.afAuth.authState.pipe(first()).toPromise();
  //   return this.user;
  // }

  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

  // changeSpeed(val) {
  //   this.theme.setVariable('--speed', `${val}ms`);
  // }



}
