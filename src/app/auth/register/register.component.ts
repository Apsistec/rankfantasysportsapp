import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  hide = true;
  constructor(
    public auth: AuthService,
  ) { }
}


