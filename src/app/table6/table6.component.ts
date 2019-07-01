import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-table6',
  templateUrl: './table6.component.html',
  styleUrls: ['./table6.component.scss'],
})
export class Table6Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

}
