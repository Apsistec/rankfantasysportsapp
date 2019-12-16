import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserTicketsPage } from './user-tickets.page';
import { SharedPageModule } from '../../shared/shared.module';

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
    SharedPageModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserTicketsPage],
})
export class UserTicketsPageModule { }
