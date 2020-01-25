// tslint:disable: prefer-conditional-expression
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Table, TableResolved } from '../../_models/table.model';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss'],
})
export class TableDetailComponent implements OnInit {

  pageTitle = 'Table Detail';
  table: Table;
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData: TableResolved =
      this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onTableRetrieved(resolvedData.table);
  }

  onTableRetrieved(table: Table): void {
    this.table = table;

    if (this.table) {
      this.pageTitle = `Table Detail: ${this.table.tableName}`;
    } else {
      this.pageTitle = 'No table found';
    }
  }
}
