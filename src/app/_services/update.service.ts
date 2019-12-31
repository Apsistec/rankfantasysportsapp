import { Injectable, OnDestroy} from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService implements OnDestroy {
  constructor(private swUpdate: SwUpdate, private message: MessageService) {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(evt => {
        this.updateSW();
      });
    }
  }

  updateSW() {
    return this.message.updateAlert();
  }

  ngOnDestroy() {

  }
}
