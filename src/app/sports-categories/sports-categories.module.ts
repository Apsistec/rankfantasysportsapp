import { CommonModule } from '@angular/common';
// import { DialogBoxComponent } from 'app/dialog-box/dialog-box.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { SportsCategoriesDetailComponent } from './sports-categories-detail/sports-categories-detail.component';
import { SportsCategoriesPage } from './sports-categories.page';
import { SportsTablesComponent } from './sports-tables/sports-tables.component';

const sportsRoutes: Routes = [
  {
    path: 'categories',
    component: SportsCategoriesPage,
    children: [{ path: '', redirectTo: '/categories', pathMatch: 'full' }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(sportsRoutes)
  ],
  declarations: [
    SportsCategoriesDetailComponent,
    SportsTablesComponent,
    SportsCategoriesPage,

  ],
  entryComponents: [
    // DialogBoxComponent,
  ],
  exports: [
    RouterModule,
  ]
})
export class SportsCategoriesPageModule {}
