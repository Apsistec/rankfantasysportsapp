import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../core/services/message.service';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {
  titleId = 'Reset Password';
  
  constructor(
    public message: MessageService,
    public auth: AuthService,
    private router: Router,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    this.afAuth.auth.sendPasswordResetEmail(email).then
    (() => {
      this.message.resetPasswordAlert(email);
    });
  }
}
