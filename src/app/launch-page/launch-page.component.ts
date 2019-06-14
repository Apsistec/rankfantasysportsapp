import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AngularFireFunctions, AngularFireFunctionsModule } from '@angular/fire/functions';
// import { User } from '../core/user';
import { PaymentService } from '../core/payment.service';
@Component ({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.scss']
})

export class LaunchPageComponent {
subscription;
  constructor(
    public auth: AuthService,
    public functions: AngularFireFunctions,
    public pmt: PaymentService
    ) { }

}
