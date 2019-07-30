import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../core/models/user';
import { Article, ArticlesService } from '../core';
import { AuthService } from '../core/services/auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class EditableArticleResolver implements Resolve<Article> {
  user: User;
  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    public authService: AuthService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.articlesService.get(route.params['slug'])
      .pipe(
        map(
          article => {
            if (this.user.displayName === article.author.displayName) {
              return article;
            } else {
              this.router.navigateByUrl('/');
            }
          }
        ),
        catchError((err) => this.router.navigateByUrl('/'))
      );
  }
}
