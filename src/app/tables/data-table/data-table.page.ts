import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';


// import { EditDialogPage } from '../../tables/edit-dialog/edit-dialog.page';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.page.html',
  styleUrls: ['./data-table.page.scss']
})
export class DataTablePage implements AfterViewInit {

  displayedColumns = ['name', 'age', 'email', 'phrase', 'edit'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) { }


  ngAfterViewInit() {
    this.afs.collection<any>('hackers').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }


  trackByUid(index, item) {
    return item.uid;
  }



}
