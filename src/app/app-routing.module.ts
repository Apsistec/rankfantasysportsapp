import { AboutComponent } from "app/home/about/about.component";
import { AnalyticsComponent } from "app/analytics/analytics.component";
import { MailComponent } from "app/profile/mail/mail.component";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import {
  AngularFireAuthGuard,
  canActivate,
  hasCustomClaim,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from "@angular/fire/auth-guard";

import { ProfileGuard } from "@guards/profile.guard";
import { PaidMemberGuard } from "@guards/paid-member.guard";

const adminOnly = () => hasCustomClaim("admin");
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["/login"]);
const redirectLoggedInToProfile = () => redirectLoggedInTo(["items"]);
const belongsToTables = next => hasCustomClaim(`account-${next.params.id}`);
const belongsToCategories = next => hasCustomClaim(`account-${next.params.id}`);

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then(m => m.HomePageModule),
    canActivate: [ProfileGuard]
  },
  {
    path: "tables",
    loadChildren: () => import("./tables/table.module").then(m => m.TableModule)
  },

  {
    path: "lineup-builder",
    loadChildren: () =>
      import("./lineup-builder/lineup-builder.module").then(
        m => m.LineupBuilderPageModule
      )
  },

  {
    path: "how-to",
    loadChildren: () =>
      import("./sales-funnel/how-to/how-to.module").then(m => m.HowToPageModule)
  },

  { path: "mail", component: MailComponent },

  { path: "analytics", component: AnalyticsComponent },
  { path: "about", component: AboutComponent },
  
  {
    path: "purchase",
    loadChildren: () =>
    import("./purchase/purchase.module").then(m => m.PurchasePageModule)
  },
  { path: "sign-up", redirectTo: "purchase", pathMatch: "full" },
  { path: "register", redirectTo: "purchase", pathMatch: "full" },
  { path: "buy", redirectTo: "purchase", pathMatch: "full" },
  {
    path: "faq",
    loadChildren: () =>
      import("./sales-funnel/faq/faq.module").then(m => m.FaqPageModule)
  },

  {
    path: "login",
    loadChildren: () =>
      import("./auth/login/login.module").then(m => m.LoginPageModule)
    // ...canActivate(redirectLoggedInToProfile)
  },
  { path: "sign-in", redirectTo: "login", pathMatch: "full" },

  {
    path: "forgot",
    loadChildren: () =>
      import("./auth/forgot-password/forgot-password.module").then(
        m => m.ForgotPasswordPageModule
      )
  },
  { path: "reset-password", redirectTo: "forgot", pathMatch: "full" },

  {
    path: "user",
    loadChildren: () =>
      import("./profile/settings/user-tickets/user-tickets.module").then(
        m => m.UserTicketsPageModule
      ),
    // canActivate: [AngularFireAuthGuard],
    data: { role: "USER" }
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./profile/admin-dashboard/admin-dashboard.module").then(
        m => m.AdminDashboardPageModule
      ),
    data: { role: "ADMIN" }
    // ...canActivate(adminOnly)
  },
  {
    path: "tweets",
    loadChildren: () =>
      import("./sales-funnel/tweets/tweets.module").then(
        m => m.TweetsPageModule
      )
  },

  {
    path: "testimonials",
    loadChildren: () =>
      import("./sales-funnel/testimonials/testimonials.module").then(
        m => m.TestimonialsPageModule
      )
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then(m => m.ProfilePageModule),
    canActivate: [ProfileGuard]
  },

  {
    path: "stats",
    loadChildren: () =>
      import("./stats/stats.module").then(m => m.StatsPageModule)
  },

  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      // initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules
      // relativeLinkResolution: 'corrected',
      // onSameUrlNavigation: 'reload',
      // enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
