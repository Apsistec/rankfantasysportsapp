import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  Choice;

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {}

  // Toasts
  async registerSuccessToast() {
    const toast = await this.toastCtrl.create({
      header: 'Registration Successful',
      message: 'Thank You for registering',
      cssClass: 'successT',
      position: 'top',
      keyboardClose: true,
      duration: 4000,
      showCloseButton: true,
      translucent: true
    });
    return toast.present();
  }

  async userNotExistToast(error) {
    const toast = await this.toastCtrl.create({
      header: 'Account does not exist',
      message: error.message,
      cssClass: 'dangerT',
      position: 'top',
      keyboardClose: true,
      duration: 4000,
      showCloseButton: true,
      translucent: true
    });
    return toast.present();
  }

  async isLoggedInToast() {
    const toast = await this.toastCtrl.create({
      header: 'Login Successful',
      message: 'Welcome Back',
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
        'Welcome back ' +
        data.user.displayName +
        '\n Email: ' +
        data.user.email,
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
      message: 'Thank You for Stopping By!',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true
    });
    await toast.present();
  }

  async updateAlert() {
    const alert = await this.alertCtrl.create({
      header: 'App update notification ',
      message: ' There is a new version of the app, please refresh the page.. ',
      cssClass: 'infoT',
      buttons: [
        {
          text: ' Update ',
          handler: () => {
            location.reload();
            return true;
          }
        }
      ]
    });
    await alert.present();
  }

  async updateNameToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your name was updated',
      duration: 4000,
      position: 'top',
      cssClass: 'successT',
      translucent: true
    });
    await toast.present();
  }

  async subscribedToast() {
    const toast = await this.toastCtrl.create({
      header: 'Authentication Message:',
      cssClass: 'successT',
      message: 'Thank You for your payment. You are subscribed!',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true
    });
    await toast.present();
  }

  async alreadySubscribedToast() {
    const toast = await this.toastCtrl.create({
      header: 'Redirect Message:',
      cssClass: 'infoT',
      message: 'You are already a Subscriber',
      position: 'top',
      duration: 3000,
      showCloseButton: true,
      translucent: true
    });
    await toast.present();
  }

  async editEnabledToast() {
    const toast = await this.toastCtrl.create({
      header: 'Edit is Enabled',
      cssClass: 'successT',
      message:
        'Edit your name and/or email address, within the respective fields. When you are done, press the submit button. You will receive a confirmation if successful',
      position: 'top',
      showCloseButton: true,
      translucent: true
    });
    await toast.present();
  }

  //  Alerts
  async needLoginAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Access Denied',
      subHeader: 'Account Required:',
      message: 'To get started, first REGISTER an account or LOGIN',
      buttons: ['OK'],
      translucent: true
    });
    await alert.present();
  }

  async needPaymentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Access Denied',
      subHeader: 'Subscription Required:',
      message:
        'Immediate access is available after purchasing any RF$ports PRO Package',
      buttons: ['OK'],
      translucent: true
    });
    await alert.present();
  }

  async verifyEmailAlert(data: any) {
    const alert = await this.alertCtrl.create({
      header: 'Account Verification',
      subHeader: 'Verification Email Sent:',
      message:
        'Check Your email, ' +
        data.user.email +
        ', for a link to VERIFY the email for your account',
      buttons: ['OK'],
      translucent: true
    });
    await await alert.present();
  }

  async resetPasswordAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Request Successful',
      subHeader: 'Password Reset Request Sent:',
      message: 'Check your email for a link to RESET your password',
      translucent: true,
      buttons: ['OK']
    });
    await await alert.present();
  }

  async repurchaseAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Purchase Already Made',
      message: 'You are already a subscriber',
      translucent: true,
      buttons: ['OK']
    });
    await alert.present();
  }

  async internalBlockPageAlert() {
    const internalBlock = await this.alertCtrl.create({
      header: 'Unauthorized Access',
      subHeader: 'Irrelevant Area:',
      message: 'Your account does not have access to this area',
      translucent: true,
      buttons: ['OK']
    });
    await internalBlock.present();
  }

  async unsubscribedAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Account Cancellation Message',
      message:
        'We are sorry to see you go, but your account has been canceled.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async errorAlert(err: any) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: err.message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async wrongAccountAlert() {
    const alert = await this.alertCtrl.create({
      header:
        'The email address tied to your social account is not in our system.',
      message:
        'Please login using the correct email/social account, or you can register a new RF$ account using this email/social account.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async unauthenticatedAlert() {
    const loginAlert = await this.alertCtrl.create({
      header: 'Login First',
      subHeader: 'Authenticated Users Only',
      message:
        'You need to login or register an account before you can access this area',
      buttons: ['OK']
    });
    await loginAlert.present();
  }

  async saveOrCancel() {
    const alert = await this.alertCtrl.create({
      header: 'Your Changes Are Not Saved',
      message: 'If you leave without saving, your selection will be lost?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
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
