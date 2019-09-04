import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tweets', loadChildren: './tweets/tweets.module#TweetsPageModule' },
  { path: 'credibility', loadChildren: './testimonials/testimonials.module#TestimonialsPageModule' },
  { path: 'pricing', loadChildren: './pricing/pricing.module#PricingPageModule' },
  { path: 'free-trial', loadChildren: './free-trial/free-trial.module#FreeTrialPageModule' },
  { path: 'freetrial', loadChildren: './free-trial/free-trial.module#FreeTrialPageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
  { path: 'how-to', loadChildren: './how-to/how-to.module#HowToPageModule' },

  {
    path: '**',
    redirectTo: '/home'
  },
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
