import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../core/auth.service';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

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
  loading: any;
  trustedVideoUrl: SafeResourceUrl;
  baseURL: string = "https://www.googleapis.com/blogger/v3/blogs/";
  blogId: string = "2477360286461239505";
  postId: string = "9206195856900662027";
  inspirationPost;
  constructor(
    public loadingController: LoadingController,
    private domSanitizer: DomSanitizer,
    public auth: AuthService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.showVid();
    this.getInspiration();

  }

  async getInspiration() {

    const inspirationPost = await this.httpClient
      .get(
        this.baseURL +
        this.blogId +
        "/posts/" +
        this.postId +
        "?key=" +
        environment.apiKey)
      .toPromise();
    return inspirationPost;
      }

  
  async showVid() {
    const loading = await this.loadingController.create({
      message: "Loading",
      spinner: "lines",
      duration: 500,
      translucent: true
    });
    await loading.present();
    return (this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.video.url
    ));
  }
}
