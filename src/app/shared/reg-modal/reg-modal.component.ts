import { AuthService } from '@services/auth.service';
import { MessageService } from '@services/message.service';
import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-modal',
  templateUrl: './reg-modal.component.html',
  styleUrls: ['./reg-modal.component.scss'],
})
export class RegModalComponent implements OnInit {

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
    private message: MessageService,
    private router: Router,
    private loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private fb: FormBuilder
  ) {
    }

  ngOnInit() {
  }

  async loadLoader() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading... Please wait'
    });
    await loading.present();
  }

  async dismissLoader() {
    await this.loadingCtrl.dismiss();
  }

  register() {
    this.loadLoader();
    this.auth.SignUp(this.registerForm.value);
    this.dismissLoader();
    this.registerForm.reset();
    this.modalDismiss();
    this.message.registerSuccessToast();
    this.router.navigateByUrl('/purchase');
  }

  gotoLogin() {
    this.modalDismiss();
    this.router.navigateByUrl('/login');
  }

  modalDismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss();
  }
}
