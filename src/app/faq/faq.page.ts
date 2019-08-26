import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Faqs } from './faqs';
import { SupportModalComponent } from './support-modal/support-modal.component';
import { ModalController, NavParams } from '@ionic/angular';
import { AuthService } from '../core/services/auth.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  title: string;
  faqs = Faqs;
  info: string;
  panelOpenState;
  err;
  @ViewChild(IonContent) ionContent: IonContent;
  scrolledDown = false;
  constructor(
    public modalCtrl: ModalController,
    public auth: AuthService,
) { }

  ngOnInit() {
  }

  async openSupportModal() {
    const modalEl = await this.modalCtrl
      .create({
        component: SupportModalComponent,
        componentProps: {

        }
      });
    return modalEl.present();
  }

  onScroll( event ) {
    if ( event.detail.scrollTop > 200 ) {
      this.scrolledDown = true;
    } else {
      this.scrolledDown = false;
    }
  }

  ScrollToTop() {
    this.ionContent.scrollToTop( 1500 );
  }
}
