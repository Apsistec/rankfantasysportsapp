import { Component, OnInit   } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AgGridAngular } from 'ag-grid-angular';
import { AuthService } from '../core/services/auth.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss']
})
export class TablePage implements OnInit {
  // @ViewChild('agGrid') agGrid: AgGridAngular;

  title = 'app';

  // columnDefs = [
  //   { headerName: 'Make', field: 'make', sortable: true, filter: true, checkboxSelection: true },
  //   { headerName: 'Model', field: 'model', sortable: true, filter: true },
  //   { headerName: 'Price', field: 'price', sortable: true, filter: true }
  // ];

  // rowData: any;

  constructor(private http: HttpClient, public auth: AuthService) {

  }

  ngOnInit() {
    // this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }
}
