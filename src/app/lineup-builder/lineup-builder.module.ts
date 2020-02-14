import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineupBuilderPageRoutingModule } from './lineup-builder-routing.module';

import { LineupBuilderPage } from './lineup-builder.page';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LineupBuilderPageRoutingModule,
    DragDropModule
  ],
  declarations: [
    LineupBuilderPage,
    DragndropComponent
  ],
  exports:[
    DragndropComponent
  ]
})
export class LineupBuilderPageModule {}
