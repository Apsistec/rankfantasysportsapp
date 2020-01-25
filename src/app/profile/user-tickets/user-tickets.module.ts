import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserTicketsPage } from './user-tickets.page';
import { SharedModule } from '../../_shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: UserTicketsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserTicketsPage]
})
export class UserTicketsPageModule {}
