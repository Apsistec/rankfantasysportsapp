// import { Component, Input } from '@angular/core';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// import { ModalController } from '@ionic/angular';
// import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
// import { AuthService } from '../../../../core/services/auth.service';

// @Component({
//   selector: 'app-camera',
//   templateUrl: './camera.component.html',
//   styleUrls: ['./camera.component.scss'],
// })
// export class CameraComponent {
//   @Input()
//   user;
//   photoURL: SafeResourceUrl;

//   constructor(
//     public sanitizer: DomSanitizer,
//     private modalCtrl: ModalController,
//     private auth: AuthService
//   ) { }

//   async takePicture() {
//     const image = await Plugins.Camera.getPhoto({
//       quality: 100,
//       allowEditing: false,
//       resultType: CameraResultType.DataUrl,
//       source: CameraSource.Camera
//     });

//     this.photoURL = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
//   }

//   async setPhoto(photoURL) {
//     this.auth.SetUserData(photoURL);
//   }
// }
