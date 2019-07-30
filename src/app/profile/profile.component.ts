import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../core/models/user';
import { AuthService } from '../core/services/auth.service';
import { Profile } from '../core/models/profile.model';
import { concatMap ,  tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  profile: Profile;
  currentUser: User;
  isUser: boolean;

  ngOnInit() {
    this.route.data.pipe(
      concatMap((data: { profile: Profile }) => {
        this.profile = data.profile;
        // Load the current user's data.
        return this.authService.userData.pipe(tap(
          (userData: User) => {
            this.currentUser = userData;
            this.isUser = (this.currentUser.displayName === this.profile.displayName);
          }
        ));
      })
    ).subscribe();
  }

  onToggleFollowing(following: boolean) {
    this.profile.following = following;
  }

}
