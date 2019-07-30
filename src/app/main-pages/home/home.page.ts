import { Component, OnInit, ViewChild } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class HomePage implements OnInit {
  @ViewChild(IonContent) ionContent: IonContent;

  video: any = {
    url: 'https://www.youtube.com/embed/IlU_RBT2zE0',
  };

  public trustedVideoUrl: SafeResourceUrl;
  // baseURL = 'https://www.googleapis.com/blogger/v3/blogs/';
  // blogId = '2477360286461239505';
  // postId = '9206195856900662027';

  constructor(
    public domSanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    // if (document.body.scrollTop < 50) {
    //   document.getElementById('scrollToTop').style.display = 'none';
    // }
    this.showVid();
  }


  showVid() {
    (this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url));
  }

  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }

}
