import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { HasPermissionDirective } from '@directives/has-permission.directive';
import { SubmitIfValidDirective } from '@directives/submit-if-valid.directive';

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
=======
import { HasPermissionDirective } from './has-permission.directive';
import { NgModule } from '@angular/core';
import { SubmitIfValidDirective } from './submit-if-valid.directive';

@NgModule({
  declarations: [HasPermissionDirective, SubmitIfValidDirective],
  imports: [CommonModule],
  exports: [HasPermissionDirective, SubmitIfValidDirective]
>>>>>>> Stashed changes
=======
import { HasPermissionDirective } from './has-permission.directive';
import { NgModule } from '@angular/core';
import { SubmitIfValidDirective } from './submit-if-valid.directive';

@NgModule({
  declarations: [HasPermissionDirective, SubmitIfValidDirective],
  imports: [CommonModule],
  exports: [HasPermissionDirective, SubmitIfValidDirective]
>>>>>>> Stashed changes
})
export class SharedDirectivesModule {}
