import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-table8',
  templateUrl: './table8.component.html',
  styleUrls: ['./table8.component.scss'],
})
export class Table8Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

}
