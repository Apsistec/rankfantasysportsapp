import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  video: any = {
    url: 'https://www.youtube.com/embed/IlU_RBT2zE0',
    title: 'Welcome to RF$',
  };
  loading: any;
  trustedVideoUrl: SafeResourceUrl;

    constructor(
      public loadingController: LoadingController,
      private domSanitizer: DomSanitizer,
    ) {}

    ngOnInit() {
      this.showVid();
    }

    async showVid() {
      const loading = await this.loadingController.create({
        message: 'Loading',
        spinner: 'lines',
        duration: 500,
        translucent: true
      });
      await loading.present();
      return this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    }
}
