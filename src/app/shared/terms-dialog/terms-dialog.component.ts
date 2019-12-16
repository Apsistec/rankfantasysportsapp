import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-terms-dialog',
  exportAs: 'modal',
  templateUrl: './terms-dialog.component.html',
  styleUrls: ['./terms-dialog.component.scss'],
})
export class TermsDialogComponent  {

  constructor(public dialog: MatDialog) { }


  closeDialog() {
    this.dialog.closeAll();
  }
}
