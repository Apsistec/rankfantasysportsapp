import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {

  trustedVideoUrl4: SafeResourceUrl;
  video4: any = {
    url: 'https://www.youtube.com/embed/APeaBlagSNc'
  };

  constructor(
    public domSanitizer: DomSanitizer,

  ) { }

  ngOnInit() {
    this.showVid();

  }


  async showVid() {
     this.trustedVideoUrl4 = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.video4.url
    );
  }

}
