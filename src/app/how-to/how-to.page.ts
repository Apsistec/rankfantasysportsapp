import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../core/services/auth.service';


@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.page.html',
  styleUrls: ['./how-to.page.scss'],
})
export class HowToPage implements OnInit {
  @Input() user;
  titleId = 'How To... RF$\u2122';

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
