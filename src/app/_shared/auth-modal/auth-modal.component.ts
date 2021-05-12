import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {
  isLogin = true;
  isReset = false;
  isRegister = false;
  // forgot;

  constructor(public modal: ModalController, private route: Router) {}

  ngOnInit() {}

  modalDismiss() {
    this.modal.dismiss();
  }

  goToMembership() {
    this.route.navigateByUrl('/membership');
    this.modal.dismiss();
  }

  switchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  switchResetMode() {
    this.isReset = !this.isReset;
  }
}
