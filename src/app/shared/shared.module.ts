import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  entryComponents: [],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {}
