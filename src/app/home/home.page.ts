import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { IonContent } from '@ionic/angular';
import { AuthService } from '../core/services/auth.service';
import { MatMenu } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class HomePage implements OnInit {

  @ViewChild(IonContent) ionContent: IonContent;
  scrolledDown = false;

  public trustedVideoUrl: SafeResourceUrl;
  video: any = {
    url: 'https://www.youtube.com/embed/IlU_RBT2zE0',
  };

  constructor(
    public domSanitizer: DomSanitizer,
    public zone: NgZone,
    public auth: AuthService
  ) {  }

  onScroll(event) {
    if (event.detail.scrollTop > 200) {
      this.scrolledDown = true;
    } else {
      this.scrolledDown = false;
    }
  }



  ngOnInit() {
    this.showVid();
  }


  showVid() {
    (this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url));
  }

  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }


}
