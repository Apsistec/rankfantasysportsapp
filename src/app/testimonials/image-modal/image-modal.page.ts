import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  @Input() imgSource = '';
  @Input() imgTitle = '';
  @Input() imgDescription = '';

  slideOpts = {
    centeredSlides: 'true',
    zoom: true
  };

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  closeModal() {
    this.modalController.dismiss();
  }
}
