import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../../core/auth.service';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { Router } from "@angular/router";


@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  
  video: any = {
    url: "https://www.youtube.com/embed/IlU_RBT2zE0",
    title: "Welcome to RF$"
  };

  isLoading: boolean = false;
  trustedVideoUrl: SafeResourceUrl;
  baseURL: string = "https://www.googleapis.com/blogger/v3/blogs/";
  blogId: string = "2477360286461239505";
  postId: string = "9206195856900662027";
  inspirationPost;


  constructor(
    private domSanitizer: DomSanitizer,
    public auth: AuthService,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.showVid();
  }

  async showVid() {
    await (this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url))
  }
}
