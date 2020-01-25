import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.page.html',
  styleUrls: ['./tweets.page.scss']
})
export class TweetsPage {
  @ViewChild(IonContent, { static: true }) ionContent: IonContent;

  titleId = 'Recent RF$ Tweets';
  scrolledDown = false;

  constructor() {}

  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }
  onScroll(event) {
    if (event.detail.scrollTop > 200) {
      return this.scrolledDown;
    } else {
      return !this.scrolledDown;
    }
  }
}
