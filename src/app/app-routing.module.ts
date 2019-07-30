import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LaunchPageComponent } from './main-pages/launch-page/launch-page.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { MsalGuard } from './core/guard/msal.guard';
import { MsGraphComponent } from './ms-graph/ms-graph.component';
import { SigninGuard } from './core/guard/login.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './main-pages/home/home.module#HomePageModule' },
  { path: 'testimonials', loadChildren: './main-pages/testimonials/testimonials.module#TestimonialsPageModule' },
  { path: 'tweets', loadChildren: './main-pages/tweets/tweets.module#TweetsPageModule' },
  { path: 'launch-page', component: LaunchPageComponent },
  { path: 'faq', loadChildren: './main-pages/faq/faq.module#FaqPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },  //  canActivate: [SigninGuard]
  { path: 'list', loadChildren: './main-pages/list/list.module#ListPageModule' }, // canActivate: [SigninGuard]},
  {
    path: 'product', component: ProductComponent, canActivate: [MsalGuard],
    children: [
      { path: 'detail/:id', component: ProductDetailComponent }
    ]
  },
  { path: 'myProfile', component: MsGraphComponent, canActivate: [MsalGuard] },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'editor',
    loadChildren: './editor/editor.module#EditorModule'
  },
  {
    path: 'article',
    loadChildren: './article/article.module#ArticleModule'
  },
  {
    path: 'forum',
    loadChildren: './forum-home/forum-home.module#ForumHomeModule'
  }
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
