import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasPermissionDirective } from './has-permission.directive';
import { DropdownDirective } from './dropdown.directive';
import { SubmitIfValidDirective } from './submit-if-valid.directive';
@NgModule({
  declarations: [
    HasPermissionDirective,
    SubmitIfValidDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HasPermissionDirective,
    SubmitIfValidDirective,
    DropdownDirective
  ]
})
export class SharedDirectivesModule { }
