import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Faqs } from './faqs';
import { SupportModalComponent } from './support-modal/support-modal.component';
import { User } from '../core/models/user';
import { ModalController, NavParams } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { AuthService } from '../core/services/auth.service';
import { IonContent } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  @Input() user;
  faqs = Faqs;

  info: string;
  panelOpenState;

  @ViewChild(IonContent) ionContent: IonContent;
  scrolledDown = false;


  constructor(
    public modalCtrl: ModalController,
    public auth: AuthService,
    private afAuth: AngularFireAuth
) {

  }

  ngOnInit() {
    this.auth.getUser(); {
      return this.user;
    }
  }

  async openSupportModal() {
    const modalEl = await this.modalCtrl
      .create({
        component: SupportModalComponent,
        componentProps: {
          Name: this.user.displayName ,
          email: this.user.email
        }
      });
    await modalEl.present()
      .catch(err => window.alert(err));
  }

  async onCloseModal() {
    await this.modalCtrl.dismiss('', 'cancel')
    .catch(err => window.alert(err));
  }


  async getUser() {
    await this.afAuth.authState.pipe(first()).toPromise();
    return this.user;
  }

  onScroll(event) {
    if (event.detail.scrollTop > 200) {
      this.scrolledDown = true;
    } else {
      this.scrolledDown = false;
    }
  }

  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }
}
