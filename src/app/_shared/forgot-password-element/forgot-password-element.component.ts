import { AuthService } from '@services/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from '@services/message.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-element',
  templateUrl: './forgot-password-element.component.html',
  styleUrls: ['./forgot-password-element.component.scss'],
})
export class ForgotPasswordElementComponent implements OnInit {
  @Output() LoginMode = new EventEmitter;

  constructor(
    public message: MessageService,
    public auth: AuthService,
  ) {}

  ngOnInit() {}

  async onSubmit(passReset: NgForm) {
    this.auth.resetPassword(passReset.value.email);
  }

  changeLoginMode() {
    this.LoginMode.emit();
  }
}
