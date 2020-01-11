import { AuthService } from '../_services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonContent } from '@ionic/angular';

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

  trustedVideoUrl: SafeResourceUrl;

  constructor(
    private domSanitizer: DomSanitizer,

    public auth: AuthService
  ) {}

  ngOnInit() {
    this.showVid();
  }

  showVid() {
    const video = { url: 'https://www.youtube.com/embed/APeaBlagSNc' };
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      video.url
    );
  }
  onScroll(event) {
    this.scrolledDown = event.detail.scrollTop > 200 ? true : false;
  }
  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }
}
