import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-table9',
  templateUrl: './table9.component.html',
  styleUrls: ['./table9.component.scss'],
})
export class Table9Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

}
