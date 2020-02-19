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
import { MailComponent } from '..//profile/mail/mail.component';
import { NbaComponent } from '..//tables/nba/nba.component';
import { NflComponent } from '..//tables/nfl/nfl.component';
import { NgModule } from '@angular/core';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { NowComponent } from '..//tables/now/now.component';
import { PgaComponent } from '..//tables/pga/pga.component';
import { PopoverComponent } from './popover/popover.component';
import { PrivacyDialogComponent } from './privacy-dialog/privacy-dialog.component';
import { RegisterElementComponent } from './register-element/register-element.component';
import { RouterModule } from '@angular/router';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { SharedDirectivesModule } from '../_directives/shared-directives.module';
import { TennisComponent } from '..//tables/tennis/tennis.component';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { TicketComponent } from './tickets/ticket.component';
import { ToHttpsPipe } from './../_pipes/to-https.pipe';
import '../../icons';


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
    CfbComponent,
    CbbComponent,
    PgaComponent,
    ToHttpsPipe,
    NbaComponent,
    TennisComponent,
    CbbComponent,
    MailComponent,
    LoginElementComponent,
    RegisterElementComponent,
    AuthModalComponent,
    ForgotPasswordElementComponent
  ],

  entryComponents: [
    TicketComponent,
    TermsDialogComponent,
    PrivacyDialogComponent,
    PopoverComponent,
    AuthModalComponent
  ],

  imports: [
    ShareButtonsModule,
    NgxTwitterTimelineModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    SharedDirectivesModule
  ],

  exports: [
    RegisterElementComponent,
    LoginElementComponent,
    ShareButtonsModule,
    SharedDirectivesModule,
    NgxTwitterTimelineModule,
    HeaderComponent,
    PopoverComponent,
    FooterComponent,
    PrivacyDialogComponent,
    TermsDialogComponent,
    ToHttpsPipe,
    TicketComponent,
    NowComponent,
    NflComponent,
    CbbComponent,
    CfbComponent,
    PgaComponent,
    NbaComponent,
    TennisComponent,
    MailComponent,
    AuthModalComponent,
    ForgotPasswordElementComponent
  ]
})
export class SharedModule {}
