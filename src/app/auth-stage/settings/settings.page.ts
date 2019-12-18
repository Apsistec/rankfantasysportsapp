import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { NavParams } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  @Input() user;
  titleId = 'RF$\u2122 Profile Settings';
  edit = false;
  id = null;

  userForm = this.fb.group({
    displayName: [''],
    email: [''],
    photoURL: ['']
  });

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.userForm.patchValue({
      displayName: this.auth.user['displayName'],
      email: this.auth.user['email'],
      photoURL: this.auth.user['photoURL']
    });
  }


  onSubmit() {

  }
}
