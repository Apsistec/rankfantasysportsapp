import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-page',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss']
})
export class TablePage implements OnInit {

  @Input() tableId;

  constructor() {}

  ngOnInit() {}
}
