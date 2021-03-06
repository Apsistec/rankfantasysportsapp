import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';

import { Table } from '../_models/table.model';
import { TableService } from '../_services/table.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})

export class TableListComponent implements OnInit {

  titleId = 'All Sports Tables';

  @ViewChild(IonContent, { static: true }) ionContent: IonContent;

  scrolledDown = false;
  // filteredTables: Table[] = [];
  tables: Table[] = [];


  // errorMessage = '';

  // _listFilter = '';
  // get listFilter(): string {
  //   return this._listFilter;
  // }
  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   this.filteredTables = this.listFilter ? this.performFilter(this.listFilter) : this.tables;
  // }

  constructor(
    private tableService: TableService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    // this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';
    // this.showImage = this.route.snapshot.queryParamMap.get('showImage') === 'true';

    // this.tableService.getTables().subscribe({
    //   next: tables => {
    //     this.tables = tables;
    //     this.filteredTables = this.performFilter(this.listFilter);
    //   },
    //   error: err => this.errorMessage = err
    // });
  }

  // performFilter(filterBy: string): Table[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.tables.filter((table: Table) =>
  //   table.tableName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  // }

  onScroll(event) {
    this.scrolledDown = (event.detail.scrollTop > 200) ? true : false;
  }

  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }

}
