import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog, MatTable } from '@angular/material';
import { User } from '@models/user';
import { AuthService } from '@services/auth.service';

const ELEMENT_DATA: User[] = [
  { uid: '' , displayName: 'Hydrogen', photoURL: '' , createdAt: null, email: '', role: '', permissions: [''] },
  { uid: '' , displayName: 'Helium', photoURL: '' , createdAt: null, email: '', role: '', permissions: [''] },
  { uid: '' , displayName: 'Lithium', photoURL: '', createdAt: null, email: '', role: '', permissions: [''] },
  { uid: '' , displayName: 'Beryllium', photoURL: '' , createdAt: null, email: '', role: '', permissions: [''] },
  { uid: '' , displayName: 'Boron', photoURL: '' , createdAt: null, email: '', role: '', permissions: [''] },
  { uid: '' , displayName: 'Carbon', photoURL: '' , createdAt: null, email: '', role: '', permissions: [''] },
  { uid: '' , displayName: 'Nitrogen', photoURL: '' , createdAt: null, email: '', role: '', permissions: [''] },
  { uid: '' , displayName: 'Oxygen', photoURL: '' , createdAt: null, email: '', role: '', permissions: [''] },
  { uid: '' , displayName: 'Fluorine', photoURL: '', createdAt: null, email: '', role: '', permissions: [''] },
  { uid: '' , displayName: 'Neon', photoURL: '', createdAt: null, email: '', role: '', permissions: [''] },
];

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.scss'],
})

export class TableDisplayComponent implements OnInit {

  displayedColumns: string[] = ['uid', 'email', 'displayName', 'photoURL', 'role', 'permissions', 'createdAt', 'lastLogInAt', 'providerId', 'stripeCustomerId', 'plan', 'status', 'subId'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(
    public dialog: MatDialog,
    private auth: AuthService
    ) {}


  ngOnInit() {}

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '550px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj) {
    this.dataSource.push({
      displayName: 'displayName',
      email:  'email',
      uid: 'uid',
      role: 'USER',
      permissions: ['delete-ticket'],
      photoURL: 'photoURL'
    });
    this.table.renderRows();

  }
  updateRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.uid === row_obj.uid) {
        value.displayName = row_obj.displayName;
      }
      return true;
    });
  }
  deleteRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.uid !== row_obj.uid;
    });
  }


}
