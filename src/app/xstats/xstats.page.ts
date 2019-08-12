import { Component, OnInit } from '@angular/core';
import { SafeScript, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-xstats',
  templateUrl: './xstats.page.html',
  styleUrls: ['./xstats.page.scss'],
})
export class XstatsPage implements OnInit {

  url;
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.transformUrl();
  }
  transformUrl() {

    this.url = 'https://widgets.xscores.com/widget.min.js';
    this.safeUrl = this.sanitizer.bypassSecurityTrustScript('this.url');

  }
}
