import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-table5',
  templateUrl: './table5.component.html',
  styleUrls: ['./table5.component.scss'],
})
export class Table5Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

}
