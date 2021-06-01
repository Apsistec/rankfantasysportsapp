import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

import { AuthService } from '../_services/auth.service';
import { SeoService } from '../_services/seo.service';
import { Faqs } from './faqs';

// import { Plugins } from '@capacitor/core';
// const { Clipboard } = Plugins;
@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss']
})
export class FaqPage implements OnInit {
  faqs = Faqs;
  titleId = 'RF$\u2122 FAQs';
  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  scrolledDown = false;

  constructor(
    public authService: AuthService,
    private seo: SeoService
    ) {
      this.seo.addTwitterCard(
        this.titleId,
        'This is the FAQ page for those who are have questions about the Rank Fantasy Sports products and services',
        '../../../assets/img/rfs-logo.svg'
      );
    }

  ngOnInit() {}

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

  // async copy(name: string, text: string) {
  //   Clipboard.write({
  //     string: 'Q: ' + name + ' A: ' + text
  //   });
  // }
}
