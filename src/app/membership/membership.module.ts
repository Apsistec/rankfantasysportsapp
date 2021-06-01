import { ArchwizardModule } from 'angular-archwizard';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { BlinkDirective } from '../_directives/blink.directive';
import { SharedModule } from '../_shared/shared.module';
// import { MaterialModule } from '../material/material.module';
import { MembershipPage } from './membership.page';

// import { AuthModalComponent } from '../../auth-modal/auth-modal.component';

const routes: Routes = [
  {
    path: '',
    component: MembershipPage
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
    // MaterialModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    MembershipPage,
    BlinkDirective,
    // AuthModalComponent
  ],
  entryComponents: [
    // AuthModalComponent
  ]
})
export class MembershipPageModule {}
