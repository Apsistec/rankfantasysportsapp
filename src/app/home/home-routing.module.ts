import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LaunchPageComponent } from '../launch-page/launch-page.component';
import { LoginGuard } from '../core/guard/login.guard';
// import { ListPageModule } from '../list/list.module';


const homeRoutes: Routes = [
    { path: 'testimonials', loadChildren: '../testimonials/testimonials.module#TestimonialsPageModule' },
    { path: 'tweets', loadChildren: '../tweets/tweets.module#TweetsPageModule' },
    { path: 'launch-page', component: LaunchPageComponent },
    { path: 'faq', loadChildren: '../faq/faq.module#FaqPageModule' },
    { path: 'list', loadChildren: '../list/list.module#ListPageModule' },
    { path: 'stats', loadChildren: '../stats/stats.module#StatsPageModule' },
    { path: 'xstats', loadChildren: '../xstats/xstats.module#XstatsPageModule' },
    { path: '', component: HomePage }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
