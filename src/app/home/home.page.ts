import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { IonContent } from '@ionic/angular';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class HomePage implements OnInit {

  titleId = 'RF$\u2122 Home';

  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  scrolledDown = false;


  slide: any;
  slideOpts = {
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
      delay: 4000,
    },
  };

  public trustedVideoUrl: SafeResourceUrl;

  constructor(
    private domSanitizer: DomSanitizer,
    // public zone: NgZone,
    public auth: AuthService,
  ) {
    this.showVid();
   }

  onScroll(event) {
    this.scrolledDown = (event.detail.scrollTop > 200) ? true : false;
    }

  ngOnInit() {
    // this.showVid();
  }

  showVid() {
    const video = { url: 'https://www.youtube.com/embed/APeaBlagSNc' };
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(video.url);
  }

  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }
}
