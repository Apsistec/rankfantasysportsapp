import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from './profile.page';
import { SharedModule } from '../../shared/shared.module';
import { AuthGuard } from '../../core/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    canActivate: [AuthGuard],
    children: [
      { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule', canActivate: [AuthGuard] },
    ]
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
  ],
  declarations: [
    ProfilePage,
  ]
})
export class ProfilePageModule {}
