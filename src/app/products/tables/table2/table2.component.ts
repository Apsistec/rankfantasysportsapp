import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss'],
})
export class Table2Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

}
