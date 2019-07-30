import { Component, OnInit } from '@angular/core';

import { UserService } from '../../core/services/user.service';
import { ForumUser } from '../../core/models/forum-user.model';

@Component({
  selector: 'app-layout-header',
  templateUrl: './forum-header.component.html'
})
export class ForumHeaderComponent implements OnInit {
  constructor(
    private userService: UserService
  ) {}

  currentUser: ForumUser;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }
}
