import { AlertController, ToastController } from '@ionic/angular';
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
  async registerSuccessToast() {
    const toast = await this.toastCtrl.create({
      header: 'Registration Successful',
      message:
        'You have successfully registered your email with Rank Fantasy Sports!',
      cssClass: 'successT',
      position: 'middle',
      keyboardClose: true,
      duration: 4000,
      showCloseButton: true,
    });
    return toast.present();
  }

  async isLoggedInToast() {
    const toast = await this.toastCtrl.create({
      header: 'Login Successful',
      message:
        'Welcome Back!',
      cssClass: 'successT',
      position: 'middle',
      keyboardClose: true,
      duration: 3000,
      showCloseButton: true,
    });
    await toast.present();
  }

  async federatedLoginToast(data: any) {
    const toast = await this.toastCtrl.create({
      header: 'Login Successful',
      message:
        ' Welcome back ' +
        data.user.displayName +
        '!',
      cssClass: 'successT',
      position: 'middle',
      duration: 3000,
      showCloseButton: true,
      keyboardClose: true,
    });
    await toast.present();
  }

  async signOutToast() {
    const toast = await this.toastCtrl.create({
      header: 'Sign Out Successful',
      cssClass: 'successT',
      message:
        'Thank You for Stopping By!',
      position: 'middle',
      duration: 3000,
      showCloseButton: true,

      keyboardClose: true,

    });
    await toast.present();
  }

  async updateNameToast() {
    const toast = await this.toastCtrl.create({
      header: 'Update Successful',
      message:
        'User info was updated',
      duration: 3000,
      position: 'middle',
      cssClass: 'successT',
      showCloseButton: true,

      keyboardClose: true,

    });
    await toast.present();
  }

  async subscribedToast() {
    const toast = await this.toastCtrl.create({
      header: 'Payment Successful',
      cssClass: 'successT',
      message:
        'You are subscribed! Thank You!',
      position: 'middle',
      duration: 3000,
      showCloseButton: true,
      keyboardClose: true,

    });
    await toast.present();
  }

  async alreadySubscribedToast() {
    const toast = await this.toastCtrl.create({
      header: 'Invalid Request',
      cssClass: 'warningT',
      message:
        ' You are already Subscribed',
      position: 'middle',
      duration: 3000,
      showCloseButton: true,

      keyboardClose: true,

    });
    await toast.present();
  }

  //  Alerts
  async noExistFederatedUserAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Error Occurred',
      subHeader: 'That email address is not in our system',
      message:
        'Try another account. If you continue to have trouble, \n open a trouble ticket and we will assist you',
      buttons: ['OK']
    });
    await alert.present();
  }


  async needPaymentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Members Area Only',
      subHeader: 'Paid PRO Package Required',
      message: 'Purchase any RF$ports PRO Package for immediate access',
      buttons: ['OK'],

    });
    await alert.present();
  }

  async resetPasswordAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Request Successful',
      subHeader: 'Password Reset Request Sent',
      message: 'Check your email for a link to RESET your password',

      buttons: ['OK']
    });
    await alert.present();
  }

  async repurchaseAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Invalid Request',
      message: 'You are already Subscribed',
      buttons: ['OK']
    });
    await alert.present();
  }

  async internalBlockPageAlert() {
    const internalBlock = await this.alertCtrl.create({
      header: 'Invalid Request',
      subHeader: 'You are already Signed In',
      message: 'Your account does not need access to this area',

      buttons: ['OK']
    });
    await internalBlock.present();
  }

  async unsubscribedAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Cancellation Successful',
      subHeader: 'Your account has been cancelled',

      message:
        'Effective immediately. Thank you for giving us a try!',
      buttons: ['OK']
    });
    await alert.present();
  }

  async errorAlert(err: any) {
    const alert = await this.alertCtrl.create({
      header: 'An Error Occurred',
      message: err.message,
      buttons: ['OK'],

    });
    await alert.present();
  }

  async saveOrCancel() {
    const alert = await this.alertCtrl.create({
      header: 'Are You Sure?',
      subHeader: 'Changes were NOT saved',
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

}
