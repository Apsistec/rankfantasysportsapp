import {
  AlertController,
  ToastController
} from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  Choice;

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController  ) {}
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  // Toasts
  async registerSuccessToast(user) {
    const toast = await this.toastCtrl.create({
      header: 'Registration Successful',
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> Thank You ' +
        user.displayName +
        '! You are now Registered',
      cssClass: 'successT',
      position: 'top',
      keyboardClose: true,
      duration: 4000,
      showCloseButton: true,
      translucent: true
    });
    return toast.present();
  }

  async isLoggedInToast(user) {
    const toast = await this.toastCtrl.create({
      header: 'Login Successful',
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> Welcome Back ' +
        user.displayName +
        '!',
      cssClass: 'successT',
      position: 'top',
      keyboardClose: true,
      duration: 4000,
      showCloseButton: true,
      translucent: true
    });
    await toast.present();
  }

  async federatedLoginToast(data: any) {
    const toast = await this.toastCtrl.create({
      header: 'Login Successful',
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> Welcome back ' +
        data.user.displayName +
        '!',
      cssClass: 'successT',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      keyboardClose: true,
      translucent: true
    });
    await toast.present();
  }

  async signOutToast() {
    const toast = await this.toastCtrl.create({
      header: 'Sign Out Successful',
      cssClass: 'successT',
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> Thank You for Stopping By!',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true
    });
    await toast.present();
  }

  async updateNameToast() {
    const toast = await this.toastCtrl.create({
      header: 'Update Successful',
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> User info was updated',
      duration: 4000,
      position: 'top',
      cssClass: 'successT',
      translucent: true
    });
    await toast.present();
  }

  async subscribedToast() {
    const toast = await this.toastCtrl.create({
      header: 'Payment Successful',
      cssClass: 'successT',
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> You are subscribed! Thank You!',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true
    });
    await toast.present();
  }

  async alreadySubscribedToast() {
    const toast = await this.toastCtrl.create({
      header: 'Invalid Request',
      cssClass: 'infoT',
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> You are already Subscribed',
      position: 'top',
      duration: 3000,
      showCloseButton: true,
      translucent: true
    });
    await toast.present();
  }

  //  Alerts
  async noExistFederatedUserAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Error Occurred',
      subHeader: 'That email address is not in our system',
      translucent: true,
      message:
        'Try another account. If you continue to have trouble, \n open a trouble ticket and we will assist you',
      buttons: ['OK']
    });
    await alert.present();
  }

  async unauthenticatedAlert() {
    const loginAlert = await this.alertCtrl.create({
      header: 'Authentication Required',
      subHeader: 'Login or Register',
      translucent: true,
      message: 'You will need to Login or Register an account for access',
      buttons: ['OK']
    });
    await loginAlert.present();
  }

  async needPaymentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Members Area Only',
      subHeader: 'Paid PRO Package Required',
      message: 'Purchase any RF$ports PRO Package for immediate access',
      buttons: ['OK'],
      translucent: true
    });
    await alert.present();
  }

  async verifyEmailAlert(data: any) {
    const alert = await this.alertCtrl.create({
      header: 'Request Successful',
      subHeader: 'Verification Email Sent',
      message:
        'Check your ' + data.user.email + ' email for further instructions',
      buttons: ['OK'],
      translucent: true
    });
    await alert.present();
  }

  async resetPasswordAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Request Successful',
      subHeader: 'Password Reset Request Sent',
      message: 'Check your email for a link to RESET your password',
      translucent: true,
      buttons: ['OK']
    });
    await alert.present();
  }

  async repurchaseAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Invalid Request',
      message: 'You are already Subscribed',
      translucent: true,
      buttons: ['OK']
    });
    await alert.present();
  }

  async internalBlockPageAlert() {
    const internalBlock = await this.alertCtrl.create({
      header: 'Invalid Request',
      subHeader: 'You are already Signed In',
      message: 'Your account does not have access to this area',
      translucent: true,
      buttons: ['OK']
    });
    await internalBlock.present();
  }

  async unsubscribedAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Cancellation Successful',
      subHeader: 'Your account has been cancelled',
      translucent: true,
      message:
        'Your account has been terminated, effective immediately. Thank you for giving us a try!.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async errorAlert(err: any) {
    const alert = await this.alertCtrl.create({
      header: 'An Error Occurred',
      message: err.message,
      buttons: ['OK'],
      translucent: true
    });
    await alert.present();
  }

  async saveOrCancel() {
    const alert = await this.alertCtrl.create({
      header: 'Are You Sure?',
      subHeader: 'Changes were NOT saved',
      translucent: true,
      message: 'Press Save to resume editing or press OK to close',
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: cancel => {
            this.Choice = cancel.Choice;
          }
        },
        {
          text: 'Save',
          handler: save => {
            this.Choice = save.Choice;
          }
        }
      ]
    });
    await alert.present();
  }

  // async updateAlert() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'App update notification ',
  //     message: '<ion-icon name="flag"  slot="start"></ion-icon>  There is a new version of the app, please refresh the page.. ',
  //     cssClass: 'infoT',
  //     buttons: [
  //       {
  //         text: ' Update ',
  //         handler: () => {
  //           location.reload();
  //           return true;
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }
}
