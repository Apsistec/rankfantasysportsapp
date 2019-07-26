import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { SignUpComponent } from '../components/sign-up/sign-up.component';
// import { SignInComponent } from '../components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    // SignInComponent,
    // SignUpComponent
  ],
  entryComponents: [],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {}
