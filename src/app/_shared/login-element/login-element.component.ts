import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { User } from '../../_models/user';
import { AuthService } from '../../_services/auth.service';
import { MessageService } from '../../_services/message.service';

@Component({
  selector: 'app-login-element',
  templateUrl: './login-element.component.html',
  styleUrls: ['./login-element.component.scss'],
})
export class LoginElementComponent implements OnInit {
  hide: boolean;
  user: User;

  loginForm;


  @Output() readyToStep = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private message: MessageService,
    private modal: ModalController
  ) {}


  ngOnInit() {


    this.hide = true;
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
          Validators.maxLength(25)
        ]
      ]
    });
  }


  async login() {
    try{
      this.modal.dismiss();
      const user = await this.authService.SignIn(this.loginForm.value.email, this.loginForm.value.password);
      (this.authService.isSubscribed) ? this.router.navigateByUrl('/profile') : this.router.navigateByUrl('/membership');
    } catch (error) {
      await this.message.errorAlert(error.message);
    }
  }


}

