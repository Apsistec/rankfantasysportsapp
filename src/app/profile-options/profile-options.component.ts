import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-options',
  templateUrl: './profile-options.component.html'
})
export class ProfileOptionsComponent {
  showOptions = true;
  showConfig = true;
  showDownloader = true;
  showUploader = true;
  showSearch = true;

  toggleOptions() { this.showOptions = !this.showOptions; }
  toggleConfig() { this.showConfig = !this.showConfig; }
  toggleDownloader() { this.showDownloader = !this.showDownloader; }
  toggleUploader() { this.showUploader = !this.showUploader; }
  toggleSearch() { this.showSearch = !this.showSearch; }
}
