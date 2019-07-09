import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SupportModalComponent } from "../shared/support-modal/support-modal.component";
import { MembershipsComponent } from '../account-management/memberships/memberships.component';
import { SignInComponent } from '../entrance/sign-in/sign-in.component';


@NgModule({
  declarations: [
    SignInComponent,
    HeaderComponent,
    FooterComponent,
    SupportModalComponent,
    MembershipsComponent
  ],
  entryComponents: [SupportModalComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [
    SignInComponent,
    HeaderComponent,
    FooterComponent,
    SupportModalComponent,
    MembershipsComponent,
  ]
})
export class SharedModule {}
