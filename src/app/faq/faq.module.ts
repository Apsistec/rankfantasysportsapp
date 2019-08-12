import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FaqPage } from './faq.page';
import { SupportModalComponent } from '../support-modal/support-modal.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../core/guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: FaqPage,
    canActivate: [AuthGuard]

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
  declarations: [
    FaqPage,
    SupportModalComponent,
  ],
  entryComponents: [SupportModalComponent]
})
export class FaqPageModule {}
