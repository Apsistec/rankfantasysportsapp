import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { SportsCategoriesPage } from './sports-categories.page';
import { SportsCategoriesDetailComponent } from './sports-categories-detail/sports-categories-detail.component';
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
    SportsCategoriesPage
  ],
  exports: [RouterModule]
})
export class SportsCategoriesPageModule {}
