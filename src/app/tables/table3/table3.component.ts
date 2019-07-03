import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.scss'],
})
export class Table3Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

}
