import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { LaunchPageComponent } from '../launch-page/launch-page.component';
import { PaypalComponent } from '../paypal/paypal.component';
// import { StatsPageModule } from '../stats/stats.module';
// import { XstatsPageModule } from '../xstats/xstats.module';
import { HomeRoutingModule } from './home-routing.module';
import { PostsComponent } from '../posts/posts.component';
import { MessagesComponent } from '../messages/messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    // StatsPageModule,
    // XstatsPageModule,
    HomeRoutingModule
  ],
  declarations: [
    PostsComponent,
    HomePage,
    PaypalComponent,
    LaunchPageComponent,
    MessagesComponent
  ],
  exports: []
})
export class HomeModule { }
