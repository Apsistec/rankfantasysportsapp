import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Profile, ProfilesService } from '../../core';
import { AuthService } from '../../core/services/auth.service';
import { concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html'
})
export class FollowButtonComponent {
  constructor(
    private profilesService: ProfilesService,
    private router: Router,
    public authService: AuthService
  ) { }

  @Input() profile: Profile;
  @Output() toggle = new EventEmitter<boolean>();
  isSubmitting = false;

  toggleFollowing() {
    this.isSubmitting = true;
    // TODO: remove nested subscribes, use mergeMap

    this.authService.afAuth.user.pipe(concatMap(
      (authenticated) => {
        // Not authenticated? Push to login screen
        if (!authenticated) {
          this.router.navigateByUrl('/signin');
          return of(null);
        }

        // Follow this profile if we aren't already
        if (!this.profile.following) {
          return this.profilesService.follow(this.profile.displayName)
            .pipe(tap(
              data => {
                this.isSubmitting = false;
                this.toggle.emit(true);
              },
              err => this.isSubmitting = false
            ));

          // Otherwise, unfollow this profile
        } else {
          return this.profilesService.unfollow(this.profile.displayName)
            .pipe(tap(
              data => {
                this.isSubmitting = false;
                this.toggle.emit(false);
              },
              err => this.isSubmitting = false
            ));
        }
      }
    )).subscribe();
  }
}
