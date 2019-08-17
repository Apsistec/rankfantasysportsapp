import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonContent) ionContent: IonContent;
  scrolledDown = false;

  constructor() { }

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
}
