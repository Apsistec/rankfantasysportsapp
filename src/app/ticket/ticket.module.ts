import { SharedDirectivesModule } from '../core/directives/shared-directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TicketPage } from './ticket.page';

const routes: Routes = [
  {
    path: '',
    component: TicketPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedDirectivesModule
  ],
  declarations: [TicketPage]
})
export class TicketPageModule {}