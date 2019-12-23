import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from './profile.page';
import { SharedModule } from '@shared/shared.module';
import { AuthGuard } from '@guards/auth.guard';
import { InvoicesComponent } from './invoices/invoices.component';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    canActivate: [AuthGuard],
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
    InvoicesComponent
  ],
  declarations: [
    ProfilePage,
    InvoicesComponent,
    CancelSubscriptionComponent
  ]
})
export class ProfilePageModule {}
