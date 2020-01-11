import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';
import { TimelineComponent } from '../timeline/timeline.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { InformaComponent } from 'app/informa/informa.component';
import { DevicesComponent } from 'app/devices/devices.component';
import { PhonetestComponent } from 'app/phonetest/phonetest.component';
import { IconRowComponent } from 'app/icon-row/icon-row.component';
import {
  AngularFireAuthGuard,
  canActivate,
  hasCustomClaim,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
// import { MemberGuard } from '../../../Member.guard';
// import { PaidMemberGuard } from '../../../paid-member.guard';
import { SportsCategoriesDetailComponent } from '../sports-categories/sports-categories-detail/sports-categories-detail.component';
import { SportsTablesComponent } from '../sports-categories/sports-tables/sports-tables.component';
import { TableDisplayComponent } from '../table-display/table-display.component';

const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToProfile = () => redirectLoggedInTo(['items']);
const belongsToTables = next => hasCustomClaim(`account-${next.params.id}`);
const belongsToCategories = next => hasCustomClaim(`account-${next.params.id}`);

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'tweets',
        loadChildren: () =>
          import('../tweets/tweets.module').then(m => m.TweetsPageModule)
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('../sports-categories/sports-categories.module').then(
            m => m.SportsCategoriesPageModule
          )
      },
      {
        path: 'how-to',
        loadChildren: () =>
          import('../how-to/how-to.module').then(m => m.HowToPageModule)
      },
      {
        path: 'free-trial',
        loadChildren: () =>
          import('../purchase/purchase.module').then(m => m.PurchasePageModule)
      },
      { path: 'freetrial', redirectTo: 'free-trial', pathMatch: 'full' },
      { path: 'free', redirectTo: 'free-trial', pathMatch: 'full' },
      { path: 'freetrail', redirectTo: 'free-trial', pathMatch: 'full' },
      {
        path: 'pricing',
        loadChildren: () =>
          import('../pricing/pricing.module').then(m => m.PricingPageModule)
      },
      { path: 'prices', redirectTo: 'pricing', pathMatch: 'full' },
      { path: 'price', redirectTo: 'pricing', pathMatch: 'full' },
      {
        path: 'credibility',
        loadChildren: () =>
          import('../testimonials/testimonials.module').then(
            m => m.TestimonialsPageModule
          )
      },
      {
        path: 'purchase',
        loadChildren: () =>
          import('../purchase/purchase.module').then(m => m.PurchasePageModule)
      },
      { path: 'buy', redirectTo: 'purchase', pathMatch: 'full' },
      {
        path: 'faq',
        loadChildren: () => import('../faq/faq.module').then(m => m.FaqPageModule)
      },
      {
        path: 'welcome',
        loadChildren: () =>
          import('../auth/welcome/welcome.module').then(m => m.WelcomePageModule),
        canActivate: [AngularFireAuthGuard]
      },
      {
        path: 'login',
        loadChildren: () =>
          import('../auth/login/login.module').then(m => m.LoginPageModule),
        ...canActivate(redirectLoggedInToProfile)
      },
      { path: 'sign-in', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'register',
        loadChildren: () =>
          import('../auth/register/register.module').then(m => m.RegisterPageModule),
        ...canActivate(redirectLoggedInToProfile)
      },
      {
        path: 'forgot',
        loadChildren: () =>
          import('../auth/forgot-password/forgot-password.module').then(
            m => m.ForgotPasswordPageModule
          )
      },
      { path: 'reset-password', redirectTo: 'forgot', pathMatch: 'full' },
      {
        path: 'verify',
        loadChildren: () =>
          import('../auth/verify-email/verify-email.module').then(
            m => m.VerifyEmailPageModule
          )
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../auth/profile/profile.module').then(m => m.ProfilePageModule),
        canActivate: [AngularFireAuthGuard]
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../auth/user-tickets/user-tickets.module').then(
            m => m.UserTicketsPageModule
          ),
        canActivate: [AngularFireAuthGuard],
        data: { role: 'USER' }
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('../auth/admin-dashboard/admin-dashboard.module').then(
            m => m.AdminDashboardPageModule),
        data: { role: 'ADMIN' }, ...canActivate(adminOnly)
      },
      {
        path: 'tweets',
        loadChildren: () =>
          import('../tweets/tweets.module').then(m => m.TweetsPageModule)
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('../sports-categories/sports-categories.module').then(m => m.SportsCategoriesPageModule)
      },
      {
        path: 'categories/:id',
        component: SportsCategoriesDetailComponent,
        ...canActivate(belongsToCategories)
      },
      {
        path: 'tables/:id',
        component: SportsTablesComponent,
        ...canActivate(belongsToTables)
      },
      {
        path: 'table-display',
        component: TableDisplayComponent
      }

    ]
  },

]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomePage,
    TimelineComponent,
    LandingPageComponent,
    InformaComponent,
    PhonetestComponent,
    IconRowComponent,
    DevicesComponent
  ],
  exports: []
})
export class HomePageModule { }
