import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../_services/auth.service';
import { CollectionService } from '../../_services/collection.service';
import {
  Component,
  Input,
  OnInit,
  ViewChild
  } from '@angular/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog, MatTable } from '@angular/material';
import { User } from '../../_models/user';
// import Stripe from 'stripe';
const ELEMENT_DATA: User[] = [];

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.scss']
})
export class TableDisplayComponent implements OnInit {


  users;
  members;
  admins;
  dataSource;

  displayedColumns: string[] = [
    'uid',
    'email',
    'displayName',
    'photoURL',
    'role',
    'permissions',
    'createdAt',
    'lastLogInAt',
    'providerId',
    'stripeCustomerId',
    'plan',
    'status',
    'subId'
  ];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(
    public dialog: MatDialog,
    private auth: AuthService,
    private afs: AngularFirestore,
    private collection: CollectionService
  ) {}

  ngOnInit() {
    this.users = this.collection.getUsersCollection();
    this.members = this.collection.getMembers();
    this.admins = this.collection.getAdmins();
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '100%',
      data: obj
    });

  //   // dialogRef.afterClosed().subscribe(result => {
  //   //   if (result.event === 'Add') {
  //   //     this.addRowData(result.data);
  //   //   } else if (result.event === 'Update') {
  //   //     this.updateRowData(result.data);
  //   //   } else if (result.event === 'Delete') {
  //   //     this.deleteRowData(result.data);
  //   //   }
  //   // });
  // }

  // // addRowData(row_obj) {
  // //   this.users.push({
  // //     displayName: 'displayName',
  // //     email: 'email',
  // //     uid: 'uid',
  // //     role: 'USER',
  // //     permissions: ['delete-ticket'],
  // //     photoURL: 'photoURL'
  // //   });
  // //   this.table.renderRows();
  // // }
  // // updateRowData(row_obj) {
  // //   this.dataSource = this.dataSource.filter((value, key) => {
  // //     if (value.uid === row_obj.uid) {
  // //       value.displayName = row_obj.displayName;
  // //     }
  // //     return true;
  // //   });
  // // }
  // // deleteRowData(row_obj) {
  // //   this.dataSource = this.dataSource.filter((value, key) => {
  // //     return value.uid !== row_obj.uid;
  // //   });
  // // }
  }
}
