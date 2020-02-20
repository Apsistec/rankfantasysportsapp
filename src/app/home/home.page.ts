import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonContent } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PrivacyDialogComponent } from '@shared/privacy-dialog/privacy-dialog.component';
import { Router } from '@angular/router';
import { SeoService } from '@services/seo.service';
import { StartModalComponent } from '..//home/start-modal/start-modal.component';
import { StorageService } from './../_services/storage.service';
import { TermsDialogComponent } from '@shared/terms-dialog/terms-dialog.component';
import { timeout } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
// tslint:disable-next-line: component-class-suffix
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

  trustedVideoUrl: SafeResourceUrl;

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
    modal.present();
  }

  async functionPop() {
    const user = await this.auth.getUser();
    console.log(user);
    if (user !== null) {
      this.route.navigateByUrl('/profile');
    } {
      const popupState = await this.storage.get('popModalState');
      if (popupState !== 'shown') {
        setTimeout (() => {
          this.showPopModal();
        }, 4000);
      }
    }
  }

}
