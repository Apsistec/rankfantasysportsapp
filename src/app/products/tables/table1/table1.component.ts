import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss'],
})
export class Table1Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

}
