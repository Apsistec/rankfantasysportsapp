// Fixing temporary bug in AngularFire
import firebase from 'firebase/app';
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform, ToastController } from '@ionic/angular';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  token;

  constructor(
    private afMessaging: AngularFireMessaging,
    private fun: AngularFireFunctions,
    private toastController: ToastController,
    private firebaseNative: Firebase,
    private platform: Platform,
    private message: MessageService
  ) {
    try {
      const _messaging = firebase.messaging();
      // _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      _messaging.onMessage = _messaging.onMessage.bind(_messaging);
    } catch (e) {}
  }

  async makeToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'top',
    });
    await toast.present().catch(err => {
      return this.message.errorAlert(err);
    });
  }

  getPermission() {
    let token$;
    if (this.platform.is('cordova')) {
      token$ = from(this.getPermissionNative());
    } else {
      token$ = this.getPermissionWeb();
    }

    return token$.pipe(
      tap(token => {
        this.token = token;
      })
    );
  }


  listenToMessages(): any {
    let messages$;
    if (this.platform.is('cordova')) {
      messages$ = this.firebaseNative.onNotificationOpen();
    } else {
      messages$ = this.afMessaging.messages;
    }

    return messages$.pipe(tap(v => this.showMessages(v)));
  }


  sub(topic): any {
    this.fun
    .httpsCallable('subscribeToTopic')({ topic, token: this.token })
    .pipe(tap(_ => this.makeToast(`subscribed to ${topic}`)))
    .subscribe();
  }

  unsub(topic) {
    this.fun
    .httpsCallable('unsubscribeFromTopic')({ topic, token: this.token })
    .pipe(tap(_ => this.makeToast(`unsubscribed from ${topic}`)))
    .subscribe();
  }

  private showMessages(payload) {
    let body;
    if (this.platform.is('android')) {
      body = payload.body;
    } else {
      body = payload.notification.body;
    }

    this.makeToast(body);
  }

  private getPermissionWeb() {
    return this.afMessaging.requestToken;
  }

  private async getPermissionNative() {
    let token;

    if (this.platform.is('ios')) {
      await this.firebaseNative.grantPermission();
    }

    token = await this.firebaseNative.getToken();

    return token;
  }
}
