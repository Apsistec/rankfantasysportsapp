import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { MessageService } from '../../_services/message.service';

@Component({
  selector: 'app-forgot-password-element',
  templateUrl: './forgot-password-element.component.html',
  styleUrls: ['./forgot-password-element.component.scss'],
})
export class ForgotPasswordElementComponent implements OnInit {
  @Output() LoginMode = new EventEmitter;

  constructor(
    public message: MessageService,
    public authService: AuthService,
  ) {}

  ngOnInit() {}

  async onSubmit(passReset: NgForm) {
   this.authService.ResetPassword(passReset.value.email);
  }

  changeLoginMode() {
    this.LoginMode.emit();
  }
}
