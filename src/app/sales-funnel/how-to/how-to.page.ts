import { SeoService } from '@services/seo.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.page.html',
  styleUrls: ['./how-to.page.scss']
})
export class HowToPage implements OnInit {
  titleId = 'How To... RF$\u2122';

  constructor(
    public auth: AuthService,
    private seo: SeoService
    ) {
      this.seo.addTwitterCard(
        this.titleId,
        'This is the How To page for new visitors and those who want to know how to sign up for a Rank Fantasy Sports Pro Subscription',
        '../../../assets/img/rfs-logo.svg'
      );
    }

  ngOnInit() {}
}
