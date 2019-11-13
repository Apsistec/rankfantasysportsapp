import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { ListTablesComponent } from './list-tables/list-tables.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PrivacyDialogComponent } from './privacy-dialog/privacy-dialog.component';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { TermsComponent } from './terms/terms.component';
import { MatExpansionModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { PopoverComponent } from './popover/popover.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TermsComponent,
    TermsDialogComponent,
    PrivacyDialogComponent,
    PrivacyComponent,
    ListTablesComponent,
    PopoverComponent
  ],
  entryComponents: [
    TermsDialogComponent,
    PrivacyDialogComponent,
    PopoverComponent
  ],
  imports: [
    NgxTwitterTimelineModule,
    IonicModule,
    MatDialogModule,
    CommonModule,
    MatExpansionModule,
    RouterModule,
  ],
  exports: [
    NgxTwitterTimelineModule,
    HeaderComponent,
    PopoverComponent,
    FooterComponent,
    PrivacyDialogComponent,
    PrivacyComponent,
    TermsDialogComponent,
    TermsComponent,
    MatDialogModule,
    MatExpansionModule,
    ListTablesComponent,
  ],
})
export class SharedModule {}
