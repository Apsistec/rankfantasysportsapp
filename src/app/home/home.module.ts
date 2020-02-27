import { EndorsementsComponent } from './endorsements/endorsements.component';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices/devices.component';
import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';
// import { AuthModalComponent } from '@shared/auth-modal/auth-modal.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  declarations: [
    HomePage,
    LandingPageComponent,
    EndorsementsComponent,
    DevicesComponent,
    // AuthModalComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    // AuthModalComponent
   ]
})
export class HomeModule {}
