import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class UpdateService {

  constructor(
    private swUpdate: SwUpdate,
    private message: MessageService
  ) {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(evt => {
        this.updateSW();
      });
    }
  }

  updateSW() {
    return this.message.updateAlert();
  }
}
