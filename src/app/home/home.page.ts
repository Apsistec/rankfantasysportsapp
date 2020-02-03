import { AuthService } from '../_services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonContent } from '@ionic/angular';
import { TermsDialogComponent } from '@shared/terms-dialog/terms-dialog.component';
import { ModalController } from '@ionic/angular';
import { PrivacyDialogComponent } from '@shared/privacy-dialog/privacy-dialog.component';
import { StartModalComponent } from 'app/home/start-modal/start-modal.component';
import { timeout } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  titleId = 'RF$\u2122 Home';
  core;

  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  scrolledDown = false;
  slide: any;
  slideOpts = {
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
      delay: 4000
    }
  };

  trustedVideoUrl4: SafeResourceUrl;
  video4: any = {
    url: 'https://www.youtube.com/embed/APeaBlagSNc'
  };

  constructor(
    private modalController: ModalController,
    private domSanitizer: DomSanitizer,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.showVid();
    this.functionPop();
  }

  showVid() {
    const video = { url: 'https://www.youtube.com/embed/APeaBlagSNc' };
    this.trustedVideoUrl4 = this.domSanitizer.bypassSecurityTrustResourceUrl(
      video.url
    );
  }


  onScroll(event) {
    this.scrolledDown = event.detail.scrollTop > 200 ? true : false;
  }

  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }
  async showModalTerms() {
    const modal = await this.modalController.create({
      component: TermsDialogComponent,
      cssClass: 'modalcss'
    });
    return modal.present();
  }

  async showModalPrivacy() {
    const modal = await this.modalController.create({
      component: PrivacyDialogComponent,
      cssClass: 'modalcss'
    });
    return modal.present();
  }
  async showPopModal() {
    const modal = await this.modalController.create({
      component: StartModalComponent,
      cssClass: 'custom-modal modalcss'
    });
    return modal.present();
  }

  functionPop() {
    setTimeout (() => {
      this.showPopModal();
    }, 4000);
  }

}
