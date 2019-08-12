import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { MessagesComponent } from './messages/messages.component';
import { ModalComponent } from '../modal/modal.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ModalComponent,
    HeaderComponent,
    FooterComponent,
    MessagesComponent
  ],
  entryComponents: [ ModalComponent ],
  imports: [
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    NgxTwitterTimelineModule,
    IonicModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    MessagesComponent,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    NgxTwitterTimelineModule,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    RouterModule,
  ],
})
export class SharedModule {}
