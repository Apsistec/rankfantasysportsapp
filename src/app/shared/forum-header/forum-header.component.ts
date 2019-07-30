import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { ForumUser } from '../../core/models/forum-user.model';

@Component({
  selector: 'app-layout-header',
  templateUrl: './forum-header.component.html'
})
export class ForumHeaderComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) {}

  currentUser: ForumUser;

  ngOnInit() {
    this.authService.afAuth.user.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }
}
