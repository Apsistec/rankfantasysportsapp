import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { BlinkDirective } from '@directives/blink.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PurchasePage } from './purchase.page';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ArchwizardModule } from 'angular-archwizard';

const routes: Routes = [
  {
    path: '',
    component: PurchasePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    IonicModule,
    ArchwizardModule,  
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PurchasePage,
    BlinkDirective,
  ],
})
export class PurchasePageModule {}
