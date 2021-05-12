import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IonContent, ModalController } from '@ionic/angular';
import { User } from '../_models/user';
import { SeoService } from '../_services/seo.service';
import { PrivacyDialogComponent } from '../_shared/privacy-dialog/privacy-dialog.component';
import { TermsDialogComponent } from '../_shared/terms-dialog/terms-dialog.component';

import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { StartModalComponent } from '../home/start-modal/start-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, AfterViewInit {
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
  user: User;
  trustedVideoUrl4: SafeResourceUrl;
  video4: any = {
    url: 'https://www.youtube.com/embed/APeaBlagSNc'
  };

  trustedVideoUrl: SafeResourceUrl;

  constructor(
    private modalController: ModalController,
    private domSanitizer: DomSanitizer,
    public authService: AuthService,
    private seo: SeoService,
    private storage: StorageService,
    private route: Router
    ) {
      this.seo.addTwitterCard(
        this.titleId,
        'This is the landing page for new visitors and those who are interested in learning more about a Rank Fantasy Sports Pro Subscription',
        '../../../assets/img/rfs-logo.svg'
      );
    }

  ngOnInit() {


    this.functionPop();
  }

  ngAfterViewInit() {
    this.showVid();

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
      cssClass: 'startmodal'
    });
    modal.present();
  }

  async functionPop() {
    const popupState = await this.storage.get('popModalState');
    if (popupState !== 'shown') {
      setTimeout (() => {
        this.showPopModal();
      }, 4000);
    }
  }


}
