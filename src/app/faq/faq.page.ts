import { Component, OnInit } from '@angular/core';
import { Faqs } from './faqs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  faqs = Faqs;
  info: string;

  constructor() { }

  ngOnInit() {
  }

}
