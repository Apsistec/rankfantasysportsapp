import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { PopoverController } from '@ionic/angular';
// import { PopoverComponent } from '../'
import { SubmitIfValidDirective } from '../../shared/directives/submit-if-valid.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  hide = true;

  constructor(
    public auth: AuthService,
    public popoverController: PopoverController
  ) { }

  ngOnInit() { }

  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: PopoverComponent,
  //     event: ev,
  //     translucent: true
  //   });
  //   return await popover.present();
  // }
}

