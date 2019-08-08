import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthPage } from './auth.page';
import { ProfileOptionsComponent } from '../profile-options/profile-options.component';
import { ProfilePageModule } from '../profile/profile.module';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AuthPage,
    ProfileOptionsComponent
  ]
})
export class AuthPageModule {}
