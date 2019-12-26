import { AuthService } from '@services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import {  ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  titleId = 'RF$\u2122 Signup';
  @Input() user;
  hide = true;

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'), Validators.maxLength(25)]],
    firstName: ['', [Validators.required, Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]]
  });

  constructor(
    public auth: AuthService,
    private router: Router,
    public modalCtrl: ModalController,
    private fb: FormBuilder
  ) {
    document.body.style.overflow = 'hidden';
    }

  ngOnInit() {
  }

  register() {
    this.auth.SignUp(this.registerForm.value);
  }

  gotoLogin() {
    this.router.navigateByUrl('/login');
  }

  // modalDismiss() {
  //   // using the injected ModalController this page
  //   // can "dismiss" itself and optionally pass back data
  //   this.modalCtrl.dismiss();

}
