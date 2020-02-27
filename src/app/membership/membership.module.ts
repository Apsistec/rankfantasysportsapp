import { ArchwizardModule } from 'angular-archwizard';
import { BlinkDirective } from '@directives/blink.directive';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material/material.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MembershipPage } from './membership.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
// import { AuthModalComponent } from '@shared/auth-modal/auth-modal.component';

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
    MaterialModule,
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
