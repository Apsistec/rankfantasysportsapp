import { Injectable } from '@angular/core';
import {
  AlertController,
  ToastController,
  } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
  ) {}

   // Toasts
   async registerSuccessToast(user) {
    const toast = await this.toastCtrl.create({
      header: 'Registration Successful',
      message: 'Welcome ' + user.firstName + '. Account registered to ' + user.email,
      cssClass: 'successT',
      position: 'top',
      keyboardClose: true,
      duration: 5000,
      showCloseButton: true,
      translucent: true,
    });
    return toast.present();
  }

  async isLoggedInToast(user) {
    const toast = await this.toastCtrl.create({
      header: 'Account Signs In Successful',
      message: 'Welcome back ' + user.displayName + '\n. Email: ' + user.email,
      cssClass: 'successT',
      position: 'top',
      keyboardClose: true,
      duration: 5000,
      showCloseButton: true,
      translucent: true,
    });
    return toast.present();
  }

  async federatedLoginToast(data) {
    const toast = await this.toastCtrl.create({
      header: 'Login Successful',
      message: 'Welcome back ' + data.user.displayName + '\n Email: ' + data.user.email,
      cssClass: 'successT',
      position: 'top',
      duration: 5000,
      showCloseButton: true,
      keyboardClose: true,
      translucent: true,
    });
    return toast.present();
  }

  async signOutToast() {
    const toast = await this.toastCtrl.create({
      header: 'Sign Out Successful',
      cssClass: 'successT',
      message: 'Thank You for Stopping By!',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
      keyboardClose: true
    });
    return toast.present();
  }

  //  Alerts
  async needLoginAlert() {
    const alert = await this.alertCtrl.create({
    header: 'Access Denied',
    subHeader: 'Account Required:',
    cssClass: 'dangerA',
    message: 'To get started, first REGISTER an account or LOGIN',
    buttons: ['OK'],
    translucent: true,
  });
  return alert.present();
  }

  async needPaymentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Access Denied',
      subHeader: 'Subscription Required:',
      cssClass: 'dangerA',
      message: 'Immediate access is available after purchasing any RF$ports PRO Package',
      buttons: ['OK'],
      translucent: true,
    });
    return alert.present();
  }

  async verifyEmailAlert(data) {
    const alert = await this.alertCtrl.create({
      header: 'Account Verification',
      subHeader: 'Verification Email Sent:',
      cssClass: 'successA',
      message: 'Check Your email, ' + data.user.email + ', for a link to VERIFY the email for your account',
      buttons: ['OK'],
      translucent: true,
    });
    return alert.present();
  }

  async resetPasswordAlert(data) {
    const alert = await this.alertCtrl.create({
      header: 'Request Successful',
      subHeader: 'Password Reset Request Sent:',
      cssClass: 'successA',
      message: 'Check your email, ' + data.user.email + ', for a link to RESET your password',
      translucent: true,
      buttons: ['OK']
    });
    return alert.present();
  }

  async internalBlockPageAlert() {
    const internalBlock = await this.alertCtrl.create({
      header: 'Unauthorized Access',
      subHeader: 'Irrelevant Area:',
      cssClass: 'warningA',
      message: 'Your account does not have access to this area',
      translucent: true,
      buttons: ['OK']
    });
    return internalBlock.present();
  }

  async unsubscribedAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Account Cancellation Message',
      cssClass: 'warningA',
      message: 'We are sorry to see you go, but your account has been canceled.',
      buttons: ['OK']
    });
    return alert.present();
  }

  async errorAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: err.message,
      buttons: ['OK'],
    });
    return alert.present();
  }

  async wrongAccountAlert() {
    const alert = await this.alertCtrl.create({
      header: 'The email address tied to your social account is not in our system.',
      message: 'Please login using the correct email/social account, or you can register a new RF$ account using this email/social account.',
      buttons: ['OK'],
      cssClass: 'warningA'
    });
    return alert.present();
  }
}
