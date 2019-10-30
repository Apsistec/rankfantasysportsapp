import { Component, OnInit } from '@angular/core';
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

  constructor(
    public auth: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    this.afAuth.auth.sendPasswordResetEmail(email).then
    (() => {
      this.auth.resetPasswordToast();
    });
  }
}
