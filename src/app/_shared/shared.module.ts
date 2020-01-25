<<<<<<< Updated upstream:src/app/_shared/shared.module.ts
import { CfbComponent } from '../tables/cfb/cfb.component';
=======
>>>>>>> Stashed changes:src/app/shared/shared.module.ts
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
<<<<<<< Updated upstream:src/app/_shared/shared.module.ts
import { NbaComponent } from '../tables/nba/nba.component';
import { NflComponent } from '../tables/nfl/nfl.component';
import { NgModule } from '@angular/core';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { NowComponent } from '../tables/now/now.component';
import { PgaComponent } from '../tables/pga/pga.component';
=======
import { NgModule } from '@angular/core';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
>>>>>>> Stashed changes:src/app/shared/shared.module.ts
import { PopoverComponent } from './popover/popover.component';
import { PrivacyDialogComponent } from './privacy-dialog/privacy-dialog.component';
import { RegModalComponent } from './reg-modal/reg-modal.component';
import { RouterModule } from '@angular/router';
<<<<<<< Updated upstream:src/app/_shared/shared.module.ts
import { TennisComponent } from '../tables/tennis/tennis.component';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
<<<<<<< Updated upstream:src/app/shared/shared.module.ts
import { MatExpansionModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { PopoverComponent } from './popover/popover.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
=======
import { TicketComponent } from './tickets/ticket.component';
import { SharedDirectivesModule } from '../_directives/shared-directives.module';
import { StarComponent } from './star/star.component';
import { CbbComponent } from '../tables/cbb/cbb.component';
>>>>>>> Stashed changes:src/app/_shared/shared.module.ts
=======
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { TicketComponent } from './tickets/ticket.component';
import { SharedDirectivesModule } from '../_directives/shared-directives.module';
import { StarComponent } from './star/star.component';
>>>>>>> Stashed changes:src/app/shared/shared.module.ts

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RegModalComponent,
    TermsDialogComponent,
    TicketComponent,
    PrivacyDialogComponent,
    PopoverComponent,
<<<<<<< Updated upstream:src/app/_shared/shared.module.ts
<<<<<<< Updated upstream:src/app/shared/shared.module.ts
=======
    NowComponent,
    NflComponent,
    CfbComponent,
    PgaComponent,
    NbaComponent,
    TennisComponent,
    CbbComponent,
    StarComponent
>>>>>>> Stashed changes:src/app/_shared/shared.module.ts
=======
    StarComponent
>>>>>>> Stashed changes:src/app/shared/shared.module.ts
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
<<<<<<< Updated upstream:src/app/_shared/shared.module.ts
<<<<<<< Updated upstream:src/app/shared/shared.module.ts
  ],
=======
    NowComponent,
    NflComponent,
    CfbComponent,
    PgaComponent,
    NbaComponent,
    TennisComponent,
    StarComponent
  ]
>>>>>>> Stashed changes:src/app/_shared/shared.module.ts
=======
    StarComponent
  ]
>>>>>>> Stashed changes:src/app/shared/shared.module.ts
})
export class SharedModule {}
