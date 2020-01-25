import { AuthService } from '../_services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonContent } from '@ionic/angular';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { AuthService } from '@services/auth.service';
import { ModalController } from '@ionic/angular';
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class HomePage implements OnInit {

<<<<<<< Updated upstream
<<<<<<< Updated upstream
  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  scrolledDown = false;
=======
  titleId = 'RF$\u2122 Home';
  core;

  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  scrolledDown = false;

>>>>>>> Stashed changes
=======
  titleId = 'RF$\u2122 Home';
  core;

  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  scrolledDown = false;

>>>>>>> Stashed changes
  slide: any;
  slideOpts = {
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
      delay: 4000
    }
<<<<<<< Updated upstream
  };
<<<<<<< Updated upstream
  titleId = 'RF$\u2122 Home';
  public trustedVideoUrl: SafeResourceUrl;
  video: any = {
    url: 'https://www.youtube.com/embed/APeaBlagSNc'
=======
>>>>>>> Stashed changes
  };

  trustedVideoUrl: SafeResourceUrl;

  constructor(
    private domSanitizer: DomSanitizer,

<<<<<<< Updated upstream
  onScroll(event) {
    if (event.detail.scrollTop > 200) {
      this.scrolledDown = true;
    } else {
      this.scrolledDown = false;
    }
  }
=======

  trustedVideoUrl: SafeResourceUrl;

  constructor(
    private domSanitizer: DomSanitizer,

    public auth: AuthService
  ) {}
>>>>>>> Stashed changes
=======
    public auth: AuthService
  ) {}
>>>>>>> Stashed changes

  ngOnInit() {
    this.showVid();
  }

  showVid() {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
  }

=======
    const video = { url: 'https://www.youtube.com/embed/APeaBlagSNc' };
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      video.url
    );
  }
  onScroll(event) {
    this.scrolledDown = event.detail.scrollTop > 200 ? true : false;
  }
>>>>>>> Stashed changes
=======
    const video = { url: 'https://www.youtube.com/embed/APeaBlagSNc' };
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      video.url
    );
  }
  onScroll(event) {
    this.scrolledDown = event.detail.scrollTop > 200 ? true : false;
  }
>>>>>>> Stashed changes
  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }
}
