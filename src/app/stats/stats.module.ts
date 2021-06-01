import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../_shared/shared.module';
// import { MaterialModule } from '../material/material.module';
import { InjuriesComponent } from './injuries/injuries.component';
import { StatsPageRoutingModule } from './stats-routing.module';
import { StatsPage } from './stats.page';

@NgModule({
  imports: [
    CommonModule,
    // MaterialModule,
    SharedModule,
    FormsModule,
    IonicModule,
    FormsModule,
    HttpClientModule,
    // MaterialModule,
    ReactiveFormsModule,
    StatsPageRoutingModule
  ],
  entryComponents: [],
  declarations: [StatsPage, InjuriesComponent]
})
export class StatsPageModule {}
