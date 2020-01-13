import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices/devices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { IconRowComponent } from './icon-row/icon-row.component';
import { InformaComponent } from './informa/informa.component';
import { IonicModule } from '@ionic/angular';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { PhonetestComponent } from './phonetest/phonetest.component';
import { SharedModule } from '../_shared/shared.module';
import { Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({

  declarations: [
    HomePage,
    LandingPageComponent,
    InformaComponent,
    PhonetestComponent,
    IconRowComponent,
    DevicesComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  entryComponents: []

})
export class HomePageModule { }
