import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  subscription;
  constructor(
    public auth: AuthService,
    public functions: AngularFireFunctions
  ) { }


  ngOnInit() {
  }

}
