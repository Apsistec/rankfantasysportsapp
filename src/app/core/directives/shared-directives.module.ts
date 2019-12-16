import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasPermissionDirective } from './has-permission.directive';
import { SubmitIfValidDirective } from './submit-if-valid.directive';

@NgModule({
  declarations: [
    HasPermissionDirective,
    SubmitIfValidDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HasPermissionDirective,
    SubmitIfValidDirective,
  ]
})
export class SharedDirectivesModule { }
