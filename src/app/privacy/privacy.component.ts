import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PrivacyDialogComponent } from '../privacy-dialog/privacy-dialog.component';
/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'app-privacy',
  templateUrl: 'privacy.component.html',
  styleUrls: ['privacy.component.scss'],
})
export class PrivacyComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(PrivacyDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
