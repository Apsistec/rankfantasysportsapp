import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
displayName;
  constructor(
    public authService: AuthService
  ) {
      // authService.SetUserData(this.displayName);
   }

  ngOnInit() { }

//   tryRegister(value){
//     this.authService.SignUp(email, password)
//     .then(res => {
//       console.log(res);
//       this.errorMessage = "";
//       this.successMessage = "Your account has been created";
//     }, err => {
//       console.log(err);
//       this.errorMessage = err.message;
//       this.successMessage = "";
//     })
//   }
}
