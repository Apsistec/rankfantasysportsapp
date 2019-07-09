import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-table7',
  templateUrl: './table7.component.html',
  styleUrls: ['./table7.component.scss'],
})
export class Table7Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

}
