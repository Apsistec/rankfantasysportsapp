import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class HomePage implements OnInit {

  video: any = {
    url: 'https://www.youtube.com/embed/IlU_RBT2zE0',
    title: 'Welcome to RF$'
  };

  public trustedVideoUrl: SafeResourceUrl;
  // baseURL = 'https://www.googleapis.com/blogger/v3/blogs/';
  // blogId = '2477360286461239505';
  // postId = '9206195856900662027';

  constructor(
    public domSanitizer: DomSanitizer,
    ) { }

  ngOnInit() {
    this.showVid();
  }

  showVid() {
    (this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url));
  }
}
