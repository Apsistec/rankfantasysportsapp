import { Component, OnInit, ViewChild} from '@angular/core';
import { Faqs } from './faqs';
import { AuthService } from '../core/services/auth.service';
import { IonContent } from '@ionic/angular';
// import { Plugins } from '@capacitor/core';
// const { Clipboard } = Plugins;
@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  faqs = Faqs;
  titleId = 'Rank Fantasy Sports FAQs';
  @ViewChild(IonContent) ionContent: IonContent;
  scrolledDown = false;

  constructor(
    public auth: AuthService,
  ) { }

  ngOnInit() {
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

  // async copy(name: string, text: string) {
  //   Clipboard.write({
  //     string: 'Q: ' + name + ' A: ' + text
  //   });
  // }
}
