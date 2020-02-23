import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { SettingsComponent } from '../profile/settings/settings.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateRouteGuard
  implements CanDeactivate<SettingsComponent> {
  canDeactivate(component: SettingsComponent): boolean {
    if (component.unsavedChanges) {
      return confirm('Are you sure?');
    }
    return true;
  }
}
