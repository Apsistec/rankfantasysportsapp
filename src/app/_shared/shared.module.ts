import { RegisterElementComponent } from './register-element/register-element.component';
import { LoginElementComponent } from './login-element/login-element.component';
import { ToHttpsPipe } from './../_pipes/to-https.pipe';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { PopoverComponent } from './popover/popover.component';
import { PrivacyDialogComponent } from './privacy-dialog/privacy-dialog.component';
import { RouterModule } from '@angular/router';
import { TicketComponent } from './tickets/ticket.component';
import { SharedDirectivesModule } from '../_directives/shared-directives.module';
import { CbbComponent } from '../tables/cbb/cbb.component';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { NowComponent } from 'app/tables/now/now.component';
import { NflComponent } from 'app/tables/nfl/nfl.component';
import { CfbComponent } from 'app/tables/cfb/cfb.component';
import { PgaComponent } from 'app/tables/pga/pga.component';
import { NbaComponent } from 'app/tables/nba/nba.component';
import { TennisComponent } from 'app/tables/tennis/tennis.component';
import { ShareButtonsModule } from '@ngx-share/buttons';
import '../../icons';
import { MailComponent } from 'app/profile/mail/mail.component';


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
    PgaComponent,
    ToHttpsPipe,
    NbaComponent,
    TennisComponent,
    CbbComponent,
    MailComponent,
    LoginElementComponent,
    RegisterElementComponent
  ],

  entryComponents: [
    TicketComponent,
    TermsDialogComponent,
    PrivacyDialogComponent,
    PopoverComponent,

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
    ShareButtonsModule,
    LoginElementComponent,
    RegisterElementComponent,
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
    CfbComponent,
    PgaComponent,
    NbaComponent,
    TennisComponent,
    MailComponent

  ]
})
export class SharedModule {}
