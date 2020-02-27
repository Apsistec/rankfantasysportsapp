import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { CollectionService } from './../../../_services/collection.service';
import { IonContent } from '@ionic/angular';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-wttsa',
  templateUrl: './wttsa.component.html',
  styleUrls: ['./wttsa.component.css']
})
export class WttsaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  // @ViewChild(MatTable, {static: false}) table: MatTable<WttsaItem>;
  dataSource: MatTableDataSource<any>;
  titleId   = 'Women\'s Tennis Tournament Stat Archives';
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['one', 'two', 'three', 'four', 'five', 'six'];

  // 'Tourney Rank',
  // 'Tournament Totals',
  // 'DK Pts/ Match',
  // 'Matches',
  // 'Break Adv',
  // 'Perform Adj'


  @ViewChild(IonContent, { static: true }) ionContent: IonContent;

  scrolledDown = false;


  constructor(
    private afs: AngularFirestore,
    private collection: CollectionService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.afs.collection<any>('Acapulco').valueChanges().subscribe(data => {
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }
  addOne() {  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onScroll(event: { detail: { scrollTop: number; }; }) {
    this.scrolledDown = event.detail.scrollTop > 200 ? true : false;
}

  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }


  trackByUid(index, item) {
    return item.uid;
  }

}
