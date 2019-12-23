import { Component, OnInit } from '@angular/core';
import { MessageService } from '@services/message.service';
import { AuthService } from '@services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss']
})

export class ForgotPasswordPage implements OnInit {
  titleId = 'Reset RF$\u2122 Password';

  constructor(
    public message: MessageService,
    public auth: AuthService,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  async onSubmit(form: NgForm) {
    this.auth.resetPassword(form.value.email);
  }

}
