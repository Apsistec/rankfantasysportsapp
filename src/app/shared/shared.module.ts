import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';


// import { ShowAuthedDirective } from './show-authed.directive';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  entryComponents: [],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    NgxTwitterTimelineModule
  ],
  exports: [
    NgxTwitterTimelineModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
  ],
})
export class SharedModule {}
