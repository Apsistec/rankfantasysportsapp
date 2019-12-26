import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports-categories',
  templateUrl: './sports-categories.page.html',
  styleUrls: ['./sports-categories.page.scss'],
})
export class SportsCategoriesPage implements OnInit {
  titleId = 'All Sports Tables';

  constructor() { }

  ngOnInit() {
  }

}
