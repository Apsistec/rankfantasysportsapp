import { Component } from '@angular/core';
import { TermsDialogComponent } from '../terms-dialog/terms-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(TermsDialogComponent);
  }


}
