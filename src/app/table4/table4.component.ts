import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-table4',
  templateUrl: './table4.component.html',
  styleUrls: ['./table4.component.scss'],
})
export class Table4Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

}
