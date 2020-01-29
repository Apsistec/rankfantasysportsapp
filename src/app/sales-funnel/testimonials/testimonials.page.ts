import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Slides } from './slides';

@Component({
  selector: 'app-testimonials',
  templateUrl: 'testimonials.page.html',
  styleUrls: ['testimonials.page.scss']
})
export class TestimonialsPage {
  titleId = 'RF$\u2122 Credibility';
  slides = Slides;
  imgDescription = 'Submitted by RF$ PRO Members';
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

  constructor(public modalController: ModalController) {}
}
