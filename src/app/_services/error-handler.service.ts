import { ErrorHandler, Injectable } from '@angular/core';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})


export class MyErrorHandler implements ErrorHandler {

  constructor(
    private message: MessageService,
  ) { }

  handleError(error) {
    this.message.errorAlert(error.message);
  }
}
