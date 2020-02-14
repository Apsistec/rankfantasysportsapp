import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InvoicesComponent } from './invoices/invoices.component';
import { NgModule } from '@angular/core';
import { ProfilePage } from './profile.page';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from '../_shared/shared.module';
// import { AppModule } from 'app/app.module';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    SharedModule,
    // AppModule,
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
  ]
})
export class ProfilePageModule {}
