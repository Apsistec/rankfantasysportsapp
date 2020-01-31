// import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { IonContent } from '@ionic/angular';
// import { Table } from '../_models/table.model';
// import { TableService } from '@services/table.service';
// import { TableModule } from './table.module';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  titleId = 'All Sports Tables';

  // @ViewChild(IonContent, { static: true }) ionContent: IonContent;

  scrolledDown = false;
  // filteredTables: Table[] = [];
  // tables: Table[] = [];

  constructor(
    // private tableService: TableService,
    // private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  onScroll(event: { detail: { scrollTop: number; }; }) {
    this.scrolledDown = event.detail.scrollTop > 200 ? true : false;
  }

  ScrollToTop() {
    // this.ionContent.scrollToTop(1500);
  }
}
