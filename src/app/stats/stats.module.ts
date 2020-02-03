import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StatsPage } from './stats.page';
import { StatsPageRoutingModule } from './stats-routing.module';
import { PlayerActiveDetailComponent } from './player-active-detail/player-active-detail.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
// import { PlayersActiveComponent } from './players-active/players-active.component';

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
    StatsPageRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents: [],
  declarations: [StatsPage, PlayerActiveDetailComponent]
})
export class StatsPageModule {}
