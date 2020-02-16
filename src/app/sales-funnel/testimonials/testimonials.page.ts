import { SeoService } from '@services/seo.service';
import { Component } from '@angular/core';
// import { ModalController } from '@ionic/angular';
import { Slides } from './slides';

@Component({
  selector: 'app-testimonials',
  templateUrl: 'testimonials.page.html',
  styleUrls: ['testimonials.page.scss']
})
export class TestimonialsPage {
  titleId = 'RF$\u2122 Credibility';
  slides = Slides;
  slide: any;
  slideOpts = {
    centeredSlides: true,
    zoom: true,
    slidesPerView: 1,
    spaceBetween: 10,
    width: 350,
    loop: true,
    mousewheel: true
  };

  constructor(
    private seo: SeoService
  ) {
    this.seo.addTwitterCard(
      this.titleId,
      'This is the testimonials page for those who want to learn first hand from members how they have had success with their Rank Fantasy Sports Pro Subscription',
      '../../../assets/img/rfs-logo.svg'
    );
  }
}
