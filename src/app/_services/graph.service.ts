import { Injectable } from '@angular/core';
import { Client } from '@microsoft/microsoft-graph-client';

import { MsalaService } from '@services/msala.service';
// import { Event } from './event';
import { MessageService } from '@services/message.service';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  private graphClient: Client;
  constructor(
    private authService: MsalaService,
    private alertsService: MessageService
  ) {
    // Initialize the Graph client

    this.graphClient = Client.init({
      authProvider: async done => {
        // Get the token from the auth service
        const token = await this.authService.getAccessToken().catch(reason => {
          done(reason, null);
        });

        if (token) {
          done(null, token);
        } else {
          done('Could not get an access token', null);
        }
      }
    });
  }

  async getExcel() {
    const res = await this.graphClient
      .api(
        `/users('rynossports@gmail.com')/drive/items('E6DAB4F84D6D7119!968')/workbook/worksheets('{C20C6EDF-B76B-48DE-88EF-31F4C6B968C8}')/usedRange`
      )
      .get();
  }
}
