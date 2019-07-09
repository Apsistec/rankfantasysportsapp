import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';




@Component({
  selector: 'app-testimonials',
  // moduleId: 'src/app/testimonials.page',
  templateUrl: './testimonials.page.html',
  styleUrls: ['testimonials.page.scss'],
})

export class TestimonialsPage {


  // public show: boolean = true;

  public slides = [
      '8000.jpg',
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '10.jpg',
      '41.jpg',
      '42.jpg',
      '49.jpg',
      '50.jpg',
      '51.jpg'
      ];


// public config = {
//     direction: 'horizontal',
//     slidesPerView: 3,
//     keyboard: true,
//     mousewheel: true,
//     scrollbar: true,

//   };


  constructor(public auth: AuthService) { }

//   public toggleType(): void {
//     this.type = (this.type === 'component') ? 'directive' : 'component';
//   }

//   public toggleDisabled(): void {
//     this.disabled = !this.disabled;
//   }

//   public toggleDirection(): void {
//     this.config.direction = (this.config.direction === 'horizontal') ? 'vertical' : 'horizontal';
//   }

//   public toggleSlidesPerView(): void {
//     if (this.config.slidesPerView !== 1) {
//       this.config.slidesPerView = 1;
//     } else {
//       this.config.slidesPerView = 3;
//     }
//   }

//   public toggleOverlayControls(): void {
//     if (this.config.navigation) {
//       this.config.scrollbar = false;
//       this.config.navigation = true;

//       this.config.pagination = this.pagination;
//     } else if (this.config.pagination) {
//       this.config.navigation = false;
//       this.config.pagination = true;

//       this.config.scrollbar = this.scrollbar;
//     } else {
//       this.config.scrollbar = false;
//       this.config.pagination = false;

//       this.config.navigation = true;
//     }

//     if (this.type === 'directive' && this.directiveRef) {
//       this.directiveRef.setIndex(0);
//     } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
//       this.componentRef.directiveRef.setIndex(0);
//     }
//   }

//   public toggleKeyboardControl(): void {
//     this.config.keyboard = !this.config.keyboard;
//   }

//   public toggleMouseWheelControl(): void {
//     this.config.mousewheel = !this.config.mousewheel;
//   }

//   public onIndexChange(index: number): void {
//     console.log('Swiper index: ', index);
//   }

//   public onSwiperEvent(event: string): void {
//     console.log('Swiper event: ', event);
//   }

}
