import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChatComponent } from '../chat/chat.component';
import { ChatboxPage } from './chatbox.page';
import { ChatService } from '../core/services/chat.service';
const routes: Routes = [
  {
    path: '',
    component: ChatboxPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers:[ChatService],
  declarations: [ChatboxPage]
})
export class ChatboxPageModule {}
