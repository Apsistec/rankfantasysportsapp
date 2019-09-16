import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { AuthGuard } from './core/guard/auth.guard';
import { TermsDialogComponent } from './shared/terms-dialog/terms-dialog.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tweets', loadChildren: './tweets/tweets.module#TweetsPageModule' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'credibility', loadChildren: './testimonials/testimonials.module#TestimonialsPageModule' },
  { path: 'pricing', loadChildren: './pricing/pricing.module#PricingPageModule' },
  { path: 'free-trial', loadChildren: './free-trial/free-trial.module#FreeTrialPageModule' },
  { path: 'freetrial', loadChildren: './free-trial/free-trial.module#FreeTrialPageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
  { path: 'how-to', loadChildren: './how-to/how-to.module#HowToPageModule' },
  { path: 'purchase', component: PurchaseComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'terms', component: TermsDialogComponent, outlet: 'terms'},
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      // enableTracing: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
