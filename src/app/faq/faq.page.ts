import { Component, OnInit } from '@angular/core';
import { Faqs } from './faqs';
import { SupportModalComponent } from '../support-modal/support-modal.component';
import { User } from '../core/models/user';
import { ModalController, NavParams } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { AuthService } from '../core/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  faqs = Faqs;
  info: string;
  panelOpenState;
  user: User;
  constructor(
    public modalCtrl: ModalController,
    public auth: AuthService,
    private afAuth: AngularFireAuth
) {

  }

  ngOnInit() {
  }

  async openSupportModal() {
    const modalEl = await this.modalCtrl
      .create({
        component: SupportModalComponent,
        componentProps: {
          // displayName: this.user.displayName | 'Your name here',
          // email: this.user.email | 'YOur email here'
        }
      });
    await modalEl.present()
      .catch(err => window.alert(err));
  }

  async onCancelModal() {
    await this.modalCtrl.dismiss('', 'cancel')
    .catch(err => window.alert(err))
    .then(() => console.log('this will succeed'));
  }

  async getUser() {
    await this.afAuth.authState.pipe(first()).toPromise();
    return this.user;
  }
}
