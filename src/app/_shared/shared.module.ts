import { CfbComponent } from '../tables/cfb/cfb.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NbaComponent } from '../tables/nba/nba.component';
import { NflComponent } from '../tables/nfl/nfl.component';
import { NgModule } from '@angular/core';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { NowComponent } from '../tables/now/now.component';
import { PgaComponent } from '../tables/pga/pga.component';
import { PopoverComponent } from './popover/popover.component';
import { PrivacyDialogComponent } from './privacy-dialog/privacy-dialog.component';
import { RegModalComponent } from './reg-modal/reg-modal.component';
import { RouterModule } from '@angular/router';
import { TennisComponent } from '../tables/tennis/tennis.component';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { TicketComponent } from './tickets/ticket.component';
import { SharedDirectivesModule } from '../_directives/shared-directives.module';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RegModalComponent,
    TermsDialogComponent,
    TicketComponent,
    PrivacyDialogComponent,
    PopoverComponent,
    NowComponent,
    NflComponent,
    CfbComponent,
    PgaComponent,
    NbaComponent,
    TennisComponent,
    StarComponent
  ],

  entryComponents: [
    TicketComponent,
    TermsDialogComponent,
    RegModalComponent,
    PrivacyDialogComponent,
    PopoverComponent
  ],

  imports: [
    NgxTwitterTimelineModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    SharedDirectivesModule
  ],

  exports: [
    SharedDirectivesModule,
    NgxTwitterTimelineModule,
    HeaderComponent,
    PopoverComponent,
    FooterComponent,
    RegModalComponent,
    PrivacyDialogComponent,
    TermsDialogComponent,
    TicketComponent,
    NowComponent,
    NflComponent,
    CfbComponent,
    PgaComponent,
    NbaComponent,
    TennisComponent,
    StarComponent
  ]
})
export class SharedModule {}
