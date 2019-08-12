import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.page.html',
  styleUrls: ['./tweets.page.scss'],
})
export class TweetsPage implements OnInit {

  @ViewChild(IonContent) ionContent: IonContent;

  scrolledDown = false;

  constructor() { }

  ngOnInit() {
  }

  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }
  onScroll(event) {
    if (event.detail.scrollTop > 200) {
      this.scrolledDown = true;
    } else {
      this.scrolledDown = false;
    }
  }
}
