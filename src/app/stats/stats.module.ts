import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InjuriesComponent } from './injuries/injuries.component';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StatsPage } from './stats.page';
import { StatsPageRoutingModule } from './stats-routing.module';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    IonicModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    StatsPageRoutingModule
  ],
  entryComponents: [],
  declarations: [StatsPage, InjuriesComponent]
})
export class StatsPageModule {}
