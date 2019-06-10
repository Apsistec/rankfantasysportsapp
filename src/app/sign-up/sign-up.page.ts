import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss']
})

export class SignUpPage implements OnInit {
displayName;
  constructor(
    public authService: AuthService
  ) {
      // authService.SetUserData(this.displayName);
   }

  ngOnInit() { }
}
