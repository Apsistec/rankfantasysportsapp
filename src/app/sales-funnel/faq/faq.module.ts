import { CommonModule } from '@angular/common';
import { FaqPage } from './faq.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
<<<<<<< Updated upstream:src/app/sales-funnel/faq/faq.module.ts
<<<<<<< Updated upstream:src/app/faq/faq.module.ts
import { FaqPage } from './faq.page';
import { SharedModule } from '@shared/shared.module';
=======
import { MatExpansionModule } from '@angular/material';
=======
import { MatExpansionModule } from '@angular/material/expansion';
>>>>>>> Stashed changes:src/app/faq/faq.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../_shared/shared.module';

<<<<<<< Updated upstream:src/app/sales-funnel/faq/faq.module.ts
>>>>>>> Stashed changes:src/app/sales-funnel/faq/faq.module.ts
=======
>>>>>>> Stashed changes:src/app/faq/faq.module.ts
const routes: Routes = [
  {
    path: '',
    component: FaqPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    MatExpansionModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FaqPage],
  entryComponents: []
})
export class FaqPageModule {}
