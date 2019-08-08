import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from './image-modal/image-modal.page';
import { Slides } from './slides';
@Component({
  selector: 'app-testimonials',
  templateUrl: 'testimonials.page.html',
  styleUrls: ['testimonials.page.scss']
})
export class TestimonialsPage {
  slides = Slides;
  imgTitle = 'Click/Pinch to Zoom';
  imgDescription = 'Submitted by RF$ subscribers';
  slide: any;
  slideOpts = {
    centeredSlides: true,
    zoom: true,
    slidesPerView: 1,
    spaceBetween: 10,
    width: 350,
    loop: true
  };

  constructor(public modalController: ModalController) { }

  // async viewImage(src: string, title: string = '', description: string = '') {
  //   const modal = await this.modalController.create({
  //     component: ImageModalPage,
  //     componentProps: {
  //       slides: src,
  //       imgTitle: title,
  //       imgDescription: description
  //     },
  //     cssClass: 'modal-fullscreen',
  //     keyboardClose: true,
  //     showBackdrop: true
  //   });

  //   return await modal.present();
  // }
}
