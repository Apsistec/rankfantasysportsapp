import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { CbbComponent } from '../tables/cbb/cbb.component';
import { CfbComponent } from '../tables/cfb/cfb.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordElementComponent } from './forgot-password-element/forgot-password-element.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { LoginElementComponent } from './login-element/login-element.component';
import { NbaComponent } from '../tables/nba/nba.component';
import { NflComponent } from '../tables/nfl/nfl.component';
import { NgModule } from '@angular/core';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { NowComponent } from '../tables/now/now.component';
import { PgaComponent } from '../tables/pga/pga.component';
import { PopoverComponent } from './popover/popover.component';
import { PrivacyDialogComponent } from './privacy-dialog/privacy-dialog.component';
import { RegisterElementComponent } from './register-element/register-element.component';
import { RouterModule } from '@angular/router';
import { SharedDirectivesModule } from '../_directives/shared-directives.module';
import { TennisComponent } from '../tables/tennis/tennis.component';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { TicketComponent } from './tickets/ticket.component';

@NgModule({
  declarations: [
    HeaderComponent,
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
    RegisterElementComponent,
    LoginElementComponent,
    AuthModalComponent
  ],

  entryComponents: [
    TicketComponent,
    TermsDialogComponent,
    AuthModalComponent,
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
    AuthModalComponent,
    NgxTwitterTimelineModule,
    HeaderComponent,
    ForgotPasswordElementComponent,
    PopoverComponent,
    FooterComponent,
    RegisterElementComponent,
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
    TennisComponent
  ]
})
export class SharedModule {}
