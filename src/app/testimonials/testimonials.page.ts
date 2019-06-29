import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss'],
})
export class TestimonialsPage {
  image = '';
  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true
  };

  constructor(private modalController: ModalController, public auth: AuthService) { }

  async openPreview() {
    const modal = await this.modalController.create({
      component: ImageModalComponent,
      componentProps: {
        img: this.image
      }
    });
    modal.present();
 
  }
}
