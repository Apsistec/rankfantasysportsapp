import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { SettingsComponent } from '../auth/settings/settings.component';

@Injectable()
export class CanDeactivateRouteGuard implements CanDeactivate<SettingsComponent> {
  canDeactivate(component: SettingsComponent): boolean {
    if (component.unsavedChanges) {
      return confirm('Are you sure?');
    }
    return true;
  }
}
