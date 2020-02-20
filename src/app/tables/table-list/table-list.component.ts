import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { SeoService } from '@services/seo.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  titleId = 'All Sports Tables';

  @ViewChild(IonContent, { static: true }) ionContent: IonContent;

  scrolledDown = false;


  constructor(seo: SeoService) {
    seo.addTwitterCard(
      this.titleId,
      'This is a list of all available RFS data-tables in all available sports',
      '../../../assets/img/rfs-logo.svg'
    );
  }

  ngOnInit() {}

  onScroll(event: { detail: { scrollTop: number; }; }) {
    this.scrolledDown = event.detail.scrollTop > 200 ? true : false;
  }

  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }
}
