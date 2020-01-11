import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Client } from '@microsoft/microsoft-graph-client';

import { User } from './../_models/user';
import { MessageService } from './message.service';

export const OAuthSettings = {
  appId: '8b3cfe6b-4ec4-41af-be3d-4f41fd41da02',
  scopes: ['user.read', 'files.read']
};
@Injectable({
  providedIn: 'root'
})
export class MsalaService {
  authenticated: boolean;

  constructor(
    private msalService: MsalService,
    private message: MessageService
  ) {
    this.authenticated = this.msalService.getUser() != null;
  }

  // Silently request an access token
  async getAccessToken(): Promise<string> {
    const result = await this.msalService
      .acquireTokenSilent(OAuthSettings.scopes)
      .catch(reason => {
        this.message.errorAlert(reason.message);
      });

    return result;
  }

  private async getUser(): Promise<any> {
    if (!this.authenticated) {
      return null;
    }

    const graphClient = Client.init({
      // Initialize the Graph client with an auth
      // provider that requests the token from the
      // auth service
      authProvider: async done => {
        const token = await this.getAccessToken().catch(reason => {
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
}
