import { AuthService } from '@services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { MessageService } from '@services/message.service';
import { Router } from '@angular/router';
import { User } from '@models/user';
import { StorageService } from '@services/storage.service';
import { ModalController } from '@ionic/angular';

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
    public auth: AuthService,
    private router: Router,
    private message: MessageService,
    private storage: StorageService,
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


  async onSubmit(form: NgForm) {
    try{
      this.modal.dismiss();
      const user = await this.auth.SignIn(form.value.email, form.value.password);
      this.storage.set('loggedInStatus', 'isLoggedIn');
      (this.auth.isSubscribed) ? this.router.navigateByUrl('/profile') : this.router.navigateByUrl('/membership');        
    } catch (error) {
      await this.message.errorAlert(error.message);
    }
  }
  

}

