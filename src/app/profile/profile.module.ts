<<<<<<< Updated upstream:src/app/profile/profile.module.ts
<<<<<<< Updated upstream:src/app/auth/profile/profile.module.ts
import { NgModule } from '@angular/core';
=======
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
>>>>>>> Stashed changes:src/app/profile/profile.module.ts
=======
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
>>>>>>> Stashed changes:src/app/auth/profile/profile.module.ts
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvoicesComponent } from './invoices/invoices.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ProfilePage } from './profile.page';
<<<<<<< Updated upstream:src/app/profile/profile.module.ts
<<<<<<< Updated upstream:src/app/auth/profile/profile.module.ts
import { SharedModule } from '@shared/shared.module';
import { AuthGuard } from '@guards/auth.guard';
import { InvoicesComponent } from './invoices/invoices.component';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
import { SportsCategoriesPageModule } from '../../sports-categories/sports-categories.module';
=======
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from '../_shared/shared.module';

>>>>>>> Stashed changes:src/app/profile/profile.module.ts
=======
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from '../_shared/shared.module';
import { MailComponent } from './mail/mail.component';

>>>>>>> Stashed changes:src/app/auth/profile/profile.module.ts
const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
<<<<<<< Updated upstream:src/app/profile/profile.module.ts
<<<<<<< Updated upstream:src/app/auth/profile/profile.module.ts
    canActivate: [AuthGuard],
=======
>>>>>>> Stashed changes:src/app/profile/profile.module.ts
=======
>>>>>>> Stashed changes:src/app/auth/profile/profile.module.ts
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    CancelSubscriptionComponent,
    InvoicesComponent,
    SettingsComponent
  ],
  declarations: [
    ProfilePage,
    InvoicesComponent,
    CancelSubscriptionComponent,
    SettingsComponent,
    MailComponent
  ]
})
export class ProfilePageModule {}
