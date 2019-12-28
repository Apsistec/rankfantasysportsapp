import { SharedDirectivesModule } from '@directives/shared-directives.module';
import { TicketComponent } from './tickets/ticket.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { RegModalComponent } from './reg-modal/reg-modal.component';
import { PrivacyDialogComponent } from './privacy-dialog/privacy-dialog.component';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { PopoverComponent } from './popover/popover.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NowComponent } from '../sports-categories/now/now.component';
import { NflComponent } from '../sports-categories/nfl/nfl.component';
import { CfbComponent } from '../sports-categories/cfb/cfb.component';
import { PgaComponent } from '../sports-categories/pga/pga.component';
import { NbaComponent } from '../sports-categories/nba/nba.component';
import { TennisComponent } from '../sports-categories/tennis/tennis.component';

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
