import { Router } from '@angular/router';
import { StorageService } from './../_services/storage.service';
import { AuthService } from '../_services/auth.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonContent } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PrivacyDialogComponent } from '@shared/privacy-dialog/privacy-dialog.component';
import { StartModalComponent } from 'app/home/start-modal/start-modal.component';
import { TermsDialogComponent } from '@shared/terms-dialog/terms-dialog.component';
import { timeout } from 'rxjs/operators';
import { SeoService } from '@services/seo.service';


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
  user: any;
  trustedVideoUrl4: SafeResourceUrl;
  video4: any = {
    url: 'https://www.youtube.com/embed/APeaBlagSNc'
  };

  constructor(
    private modalController: ModalController,
    private domSanitizer: DomSanitizer,
    public auth: AuthService,
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
    await modal.present();
    await this.storage.setObject('firsVisit', 'visitOccurred');
  }

  async functionPop() {
    this.user = await this.auth.getUser
    const firsVisit = await this.storage.getObject('firsVisit')
      if (firsVisit === 'visitOccurred'){
        if (this.user.uid) {
          console.log(this.user.uid);
          this.route.navigateByUrl('/profile');
        } else {
          return false;
        }
      } else {
        setTimeout (() => {
          this.showPopModal();
        }, 4000);
      }
  }
}
