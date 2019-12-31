import { Component, ViewChild, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-sports-categories',
  templateUrl: './sports-categories.page.html',
  styleUrls: ['./sports-categories.page.scss'],
})
export class SportsCategoriesPage implements OnInit {
  titleId = 'All Sports Tables';

  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  scrolledDown = false;

  constructor() { }

  ngOnInit() {
  }

  onScroll(event) {
    this.scrolledDown = (event.detail.scrollTop > 200) ? true : false;
  }

  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }

}
