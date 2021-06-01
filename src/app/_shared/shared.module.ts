import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SharedDirectivesModule } from '../_directives/shared-directives.module';
import { CbbComponent } from '../tables/cbb/cbb.component';
import { CfbComponent } from '../tables/cfb/cfb.component';
import { NbaComponent } from '../tables/nba/nba.component';
import { NflComponent } from '../tables/nfl/nfl.component';
import { NowComponent } from '../tables/now/now.component';
import { PgaComponent } from '../tables/pga/pga.component';
import { TennisComponent } from '../tables/tennis/tennis.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { FooterComponent } from './footer/footer.component';
import {
    ForgotPasswordElementComponent
} from './forgot-password-element/forgot-password-element.component';
import { LoginElementComponent } from './login-element/login-element.component';
import { PopoverComponent } from './popover/popover.component';
import { PrivacyDialogComponent } from './privacy-dialog/privacy-dialog.component';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { TicketComponent } from './tickets/ticket.component';

@NgModule({
  declarations: [
    FooterComponent,
    TermsDialogComponent,
    TicketComponent,
    PrivacyDialogComponent,
    PopoverComponent,
    NowComponent,
    NflComponent,
    CbbComponent,
    CfbComponent,
    PgaComponent,
    NbaComponent,
    TennisComponent,
    ForgotPasswordElementComponent,
    LoginElementComponent,
    AuthModalComponent,
  ],

  entryComponents: [TicketComponent, TermsDialogComponent, AuthModalComponent, PrivacyDialogComponent, PopoverComponent],

  imports: [
    NgxTwitterTimelineModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    SharedDirectivesModule,
    ShareButtonsModule,
  ],

  exports: [
    SharedDirectivesModule,
    AuthModalComponent,
    NgxTwitterTimelineModule,
    ForgotPasswordElementComponent,
    PopoverComponent,
    FooterComponent,
    LoginElementComponent,
    PrivacyDialogComponent,
    TermsDialogComponent,
    TicketComponent,
    NowComponent,
    NflComponent,
    CfbComponent,
    CbbComponent,
    PgaComponent,
    NbaComponent,
    TennisComponent,  ]
})
export class SharedModule {}
