import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { PlayersActiveComponent } from './players-active/players-active.component';
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
    MatNativeDateModule,
    ReactiveFormsModule,
    StatsPageRoutingModule
  ],
  entryComponents: [PlayersActiveComponent],
  declarations: [StatsPage, PlayersActiveComponent]
})
export class StatsPageModule {}
