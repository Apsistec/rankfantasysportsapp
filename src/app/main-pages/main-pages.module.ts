import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportModalComponent } from './support-modal/support-modal.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SupportModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    SharedModule
  ],
  entryComponents: [SupportModalComponent],
  exports: []
})
export class MainPagesModule { }
