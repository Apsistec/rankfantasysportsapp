import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InjuriesComponent } from './injuries/injuries.component';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { PlayerActiveDetailComponent } from './player-active-detail/player-active-detail.component';
import { SharedModule } from '@shared/shared.module';
import { StatsPage } from './stats.page';
import { StatsPageRoutingModule } from './stats-routing.module';
import { TestComponent } from './test/test.component';
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
    StatsPageRoutingModule  ],
    entryComponents: [],
    declarations: [
    StatsPage,
    InjuriesComponent,
    PlayerActiveDetailComponent,
    TestComponent
  ]
})
export class StatsPageModule {}
