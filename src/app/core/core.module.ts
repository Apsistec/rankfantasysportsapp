import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { InnerGuard, } from './guard/inner.guard';
import { MsalGuard } from './guard/msal.guard';
import { SigninGuard } from './guard/signin.guard';
import { AuthGuard } from './guard/auth.guard';
import {
  ApiService,
  ArticlesService,
  AuthService,
  CheckForUpdateService,
  CommentsService,
  HttpService,
  JwtService,
  ProfilesService,
  TagsService,
  ThemeService,
} from './services';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    ArticlesService,
    InnerGuard,
    MsalGuard,
    SigninGuard,
    AuthGuard,
    CommentsService,
    JwtService,
    ProfilesService,
    TagsService,
    AuthService,
    CheckForUpdateService,
    HttpService,
    ThemeService,
  ],
  declarations: [ErrorComponent]
})
export class CoreModule { }
