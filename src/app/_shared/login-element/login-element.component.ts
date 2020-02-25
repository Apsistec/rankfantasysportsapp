import { AuthService } from '@services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { MessageService } from '@services/message.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from '@models/user';

@Component({
  selector: 'app-login-element',
  templateUrl: './login-element.component.html',
  styleUrls: ['./login-element.component.scss'],
})
export class LoginElementComponent implements OnInit {
  hidePass: boolean;
  user: User;

  loginForm;


  @Output() readyToStep = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router,
    private message: MessageService,
    private modal: ModalController,
  ) {}


  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user)


    this.hidePass = true;
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


  async onSubmit(login: NgForm) {
    try {
          await this.auth.signIn(this.loginForm.value)
          await this.modal.dismiss();
        } catch (error) {
          await this.message.errorAlert(error.message);
        }
  

}
}
