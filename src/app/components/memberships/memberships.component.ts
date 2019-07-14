import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-memberships',
  templateUrl: './memberships.component.html',
  styleUrls: ['./memberships.component.scss']
})
export class MembershipsComponent implements OnInit {
  constructor() {}

  @Input() planId: string;
  @Input() price: string;
  @Input() planChosen;
  isClickedSilver;
  isClickedGold;
  isClickedBronze;

  ngOnInit() {
    this.planChosen = false;
    this.isClickedGold = false;
    this.isClickedSilver = false;
    this.isClickedBronze = false;
  }

  clickedGold() {
    this.isClickedSilver = false;
    this.isClickedBronze = false;
    this.isClickedGold = true;
    this.planChosen = true;
    this.planId = 'Gold';
    this.price = '$90.00 for 12 Months';
  }

  clickedSilver() {
    this.isClickedBronze = false;
    this.isClickedGold = false;
    this.isClickedSilver = true;
    this.planChosen = true;
    this.planId = 'Silver';
    this.price = '$50.00 for 6 Months';
  }

  clickedBronze() {
    this.isClickedSilver = false;
    this.isClickedGold = false;
    this.isClickedBronze = true;
    this.planChosen = true;
    this.planId = 'Bronze';
    this.price = '$9.99 per Month';
  }
}
