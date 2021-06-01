import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../_shared/shared.module';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { LineupBuilderPageRoutingModule } from './lineup-builder-routing.module';
import { LineupBuilderPage } from './lineup-builder.page';

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
