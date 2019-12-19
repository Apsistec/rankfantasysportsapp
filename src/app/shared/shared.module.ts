import { SharedDirectivesModule } from '../_directives/shared-directives.module';
import { SharedPage } from './shared.page';
import { TicketComponent } from './tickets/ticket.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { ListTablesComponent } from './list-tables/list-tables.component';
import { RegModalComponent } from './reg-modal/reg-modal.component';
import { PrivacyDialogComponent } from './privacy-dialog/privacy-dialog.component';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { MatExpansionModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { PopoverComponent } from './popover/popover.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RegModalComponent,
    TermsDialogComponent,
    TicketComponent,
    PrivacyDialogComponent,
    ListTablesComponent,
    PopoverComponent,
    SharedPage
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
    MatDialogModule,
    CommonModule,
    MatExpansionModule,
    RouterModule,
    SharedDirectivesModule
  ],
  exports: [
    NgxTwitterTimelineModule,
    HeaderComponent,
    PopoverComponent,
    FooterComponent,
    RegModalComponent,
    PrivacyDialogComponent,
    TermsDialogComponent,
    MatDialogModule,
    MatExpansionModule,
    TicketComponent,
    ListTablesComponent,
  ],
})
export class SharedPageModule {}
