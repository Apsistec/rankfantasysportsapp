import { Component } from '@angular/core';
import { SafeScript, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tennis',
  templateUrl: './tennis.component.html',
  styleUrls: ['./tennis.component.scss'],
})
export class TennisComponent {
  html;

  public trustedStatsScript: SafeScript;
  public trustedStatsUrl: SafeResourceUrl;

  constructor(
    public sanitizer: DomSanitizer
  ) {
    this.html = sanitizer.bypassSecurityTrustHtml('<script type="text/javascript" src="https://widget.enetscores.com/FW578E8058708C60C3"></script>');
  }
}
