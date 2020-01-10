import { CfbComponent } from '../sports-categories/cfb/cfb.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NbaComponent } from '../sports-categories/nba/nba.component';
import { NflComponent } from '../sports-categories/nfl/nfl.component';
import { NgModule } from '@angular/core';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { NowComponent } from '../sports-categories/now/now.component';
import { PgaComponent } from '../sports-categories/pga/pga.component';
import { PopoverComponent } from './popover/popover.component';
import { PrivacyDialogComponent } from './privacy-dialog/privacy-dialog.component';
import { RegModalComponent } from './reg-modal/reg-modal.component';
import { RouterModule } from '@angular/router';
import { SharedDirectivesModule } from '@directives/shared-directives.module';
import { TennisComponent } from '../sports-categories/tennis/tennis.component';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { TicketComponent } from './tickets/ticket.component';

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
    TennisComponent
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
    TennisComponent
  ]
})
export class SharedModule {}
