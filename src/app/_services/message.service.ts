<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
import {
  AlertController,
  NavController,
  ToastController
} from '@ionic/angular';
>>>>>>> Stashed changes
import { Injectable } from '@angular/core';
=======
>>>>>>> Stashed changes
import {
  AlertController,
  NavController,
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
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {}
  messages: string[] = [];

<<<<<<< Updated upstream
<<<<<<< Updated upstream
   // Toasts
   async registerSuccessToast(user: any) {
    const toast = await this.toastCtrl.create({
      header: 'Registration Successful',
      message: 'Welcome ' + user.displayName + '. Account registered to ' + user.email,
=======
  // Toasts
  async registerSuccessToast(user) {
    const toast = await this.toastCtrl.create({
      header: 'Registration Successful',
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> Thank You ' + user.displayName + '! You are now Registered',
>>>>>>> Stashed changes
=======
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
        '<ion-icon name="flag"  slot="start"></ion-icon> Thank You ' + user.displayName + '! You are now Registered',
>>>>>>> Stashed changes
      cssClass: 'successT',
      position: 'top',
      keyboardClose: true,
      duration: 4000,
      showCloseButton: true,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      translucent: true,
=======
      translucent: true
>>>>>>> Stashed changes
=======
      translucent: true
>>>>>>> Stashed changes
    });
    return toast.present();
  }

<<<<<<< Updated upstream
  async isLoggedInToast() {
    const toast = await this.toastCtrl.create({
      header: 'Login Successful',
<<<<<<< Updated upstream
      message: 'Welcome Back',
=======
  async isLoggedInToast(user) {
    const toast = await this.toastCtrl.create({
      header: 'Login Successful',
      message: '<ion-icon name="flag"  slot="start"></ion-icon> Welcome Back ' + user.displayName + '!',
>>>>>>> Stashed changes
=======
      message: '<ion-icon name="flag"  slot="start"></ion-icon> Welcome Back!',
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      message: 'Welcome back ' + data.user.displayName + '\n Email: ' + data.user.email,
=======
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> Welcome back ' + data.user.displayName + '!',
>>>>>>> Stashed changes
=======
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> Welcome back ' + data.user.displayName + '!',
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      message: 'Thank You for Stopping By!',
=======
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> Thank You for Stopping By!',
>>>>>>> Stashed changes
=======
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> Thank You for Stopping By!',
>>>>>>> Stashed changes
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true
    });
    await toast.present();
  }

<<<<<<< Updated upstream
<<<<<<< Updated upstream
  async updateAlert() {
    const alert = await this.alertCtrl.create({
      header :  'App update notification ' ,
      message :  ' There is a new version of the app, please refresh the page.. ' ,
      cssClass: 'infoT',
      buttons :  [{
        text :  ' Update ' ,
        handler :  ()  =>  {
          location.reload();
          return  true ;
        }
      }]
    });
    await alert.present();
    }

  async updateNameToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your name was updated',
=======
  async updateNameToast() {
    const toast = await this.toastCtrl.create({
      header: 'Update Successful',
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> User info was updated',
>>>>>>> Stashed changes
=======
  async updateNameToast() {
    const toast = await this.toastCtrl.create({
      header: 'Update Successful',
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> User info was updated',
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      message: 'Thank You for your payment. You are subscribed!',
=======
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> You are subscribed! Thank You!',
>>>>>>> Stashed changes
=======
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> You are subscribed! Thank You!',
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      message: 'You are already a Subscriber',
=======
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> You are already Subscribed',
>>>>>>> Stashed changes
      position: 'top',
      duration: 3000,
      showCloseButton: true,
      translucent: true
    });
    await toast.present();
  }

<<<<<<< Updated upstream
  async editEnabledToast() {
    const toast = await this.toastCtrl.create({
      header: 'Edit is Enabled',
      cssClass: 'successT',
      message: 'Edit your name and/or email address, within the respective fields. When you are done, press the submit button. You will receive a confirmation if successful',
=======
      message:
        '<ion-icon name="flag"  slot="start"></ion-icon> You are already Subscribed',
>>>>>>> Stashed changes
      position: 'top',
      duration: 3000,
      showCloseButton: true,
=======
  //  Alerts
  async noExistFederatedUserAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Error Occurred',
      subHeader: 'That email address is not in our system',
>>>>>>> Stashed changes
      translucent: true,
      message: 'Try another account. If you continue to have trouble, \n open a trouble ticket and we will assist you',
      buttons: ['OK']
    });
    await alert.present();
  }

<<<<<<< Updated upstream
  //  Alerts
  async noExistFederatedUserAlert() {
    const alert = await this.alertCtrl.create({
<<<<<<< Updated upstream
    header: 'Access Denied',
    subHeader: 'Account Required:',
    message: 'To get started, first REGISTER an account or LOGIN',
    buttons: ['OK'],
    translucent: true,
  });
  await alert.present();
=======
      header: 'Error Occurred',
      subHeader: 'That email address is not in our system',
      translucent: true,
      message: 'Try another account. If you continue to have trouble, \n open a trouble ticket and we will assist you',
      buttons: ['OK']
    });
    await alert.present();
>>>>>>> Stashed changes
  }

=======
>>>>>>> Stashed changes
  async unauthenticatedAlert() {
    const loginAlert = await this.alertCtrl.create({
      header: 'Authentication Required',
      subHeader: 'Login or Register',
      translucent: true,
      message:
        'You will need to Login or Register an account for access',
      buttons: ['OK']
    });
    await loginAlert.present();
  }

  async needPaymentAlert() {
    const alert = await this.alertCtrl.create({
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      header: 'Access Denied',
      subHeader: 'Subscription Required:',
      message: 'Immediate access is available after purchasing any RF$ports PRO Package',
=======
=======
>>>>>>> Stashed changes
      header: 'Members Area Only',
      subHeader: 'Paid PRO Package Required',
      message:
        'Purchase any RF$ports PRO Package for immediate access',
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      buttons: ['OK'],
      translucent: true
    });
    await alert.present();
  }

  async verifyEmailAlert(data: any) {
    const alert = await this.alertCtrl.create({
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      header: 'Account Verification',
      subHeader: 'Verification Email Sent:',
      message: 'Check Your email, ' + data.user.email + ', for a link to VERIFY the email for your account',
=======
=======
>>>>>>> Stashed changes
      header: 'Request Successful',
      subHeader: 'Verification Email Sent',
      message:
        'Check your ' + data.user.email + ' email for further instructions',
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      buttons: ['OK'],
      translucent: true
    });
    await alert.present();
  }

  async resetPasswordAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Request Successful',
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      subHeader: 'Password Reset Request Sent:',
=======
      subHeader: 'Password Reset Request Sent',
>>>>>>> Stashed changes
=======
      subHeader: 'Password Reset Request Sent',
>>>>>>> Stashed changes
      message: 'Check your email for a link to RESET your password',
      translucent: true,
      buttons: ['OK']
    });
    await alert.present();
  }

  async repurchaseAlert() {
    const alert = await this.alertCtrl.create({
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      header: 'Purchase Already Made',
      message: 'You are already a subscriber',
=======
      header: 'Invalid Request',
      message: 'You are already Subscribed',
>>>>>>> Stashed changes
=======
      header: 'Invalid Request',
      message: 'You are already Subscribed',
>>>>>>> Stashed changes
      translucent: true,
      buttons: ['OK']
    });
    await alert.present();
  }

  async internalBlockPageAlert() {
    const internalBlock = await this.alertCtrl.create({
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      header: 'Unauthorized Access',
      subHeader: 'Irrelevant Area:',
=======
      header: 'Invalid Request',
      subHeader: 'You are already Signed In',
>>>>>>> Stashed changes
=======
      header: 'Invalid Request',
      subHeader: 'You are already Signed In',
>>>>>>> Stashed changes
      message: 'Your account does not have access to this area',
      translucent: true,
      buttons: ['OK']
    });
    await internalBlock.present();
  }

  async unsubscribedAlert() {
    const alert = await this.alertCtrl.create({
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      header: 'Account Cancellation Message',
      message: 'We are sorry to see you go, but your account has been canceled.',
=======
=======
>>>>>>> Stashed changes
      header: 'Cancellation Successful',
      subHeader: 'Your account has been cancelled',
      translucent: true,
      message:
        'Your account has been terminated, effective immediately. Thank you for giving us a try!.',
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      buttons: ['OK']
    });
    await alert.present();
  }

  async errorAlert(err: any) {
    const alert = await this.alertCtrl.create({
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      header: 'Error',
      message: err.message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async wrongAccountAlert() {
    const alert = await this.alertCtrl.create({
      header: 'The email address tied to your social account is not in our system.',
      message: 'Please login using the correct email/social account, or you can register a new RF$ account using this email/social account.',
      buttons: ['OK'],
=======
      header: 'Error Occurred',
      subHeader: 'err.message',
      translucent: true,
      cssClass: 'errStyle',
      message: 'If errors continue to occur, please create a support ticket so we can help',
      buttons: ['OK']
>>>>>>> Stashed changes
    });
    await alert.present();
  }

<<<<<<< Updated upstream
  async unauthenticatedAlert() {
    const loginAlert = await this.alertCtrl.create({
      header: 'Login First',
      subHeader: 'Authenticated Users Only',
      message: 'You need to login or register an account before you can access this area',
      buttons: ['OK'],
    });
    await loginAlert.present();
=======
      header: 'Error Occurred',
      subHeader: 'err.message',
      translucent: true,
      cssClass: 'errStyle',
      message: 'If errors continue to occur, please create a support ticket so we can help',
      buttons: ['OK']
    });
    await alert.present();
>>>>>>> Stashed changes
  }

=======
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
<<<<<<< Updated upstream

=======
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
}
