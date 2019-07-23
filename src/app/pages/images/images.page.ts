import { Component, OnInit } from '@angular/core';
import { Slides } from '../testimonials/slides';
@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {
  slides = Slides;
  slide: any;
  constructor() { }

  ngOnInit() {
  }

}
