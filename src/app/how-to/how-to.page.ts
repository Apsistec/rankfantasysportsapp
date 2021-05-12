import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.page.html',
  styleUrls: ['./how-to.page.scss']
})
export class HowToPage implements OnInit {
  titleId = 'How To... RF$\u2122';

  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
