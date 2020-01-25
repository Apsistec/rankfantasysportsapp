<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { AuthService } from '@services/auth.service';
import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';
=======
=======
>>>>>>> Stashed changes
import { AuthService } from '../_services/auth.service';
import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { Subscription } from 'rxjs';
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective implements OnInit, OnDestroy {
  @Input('appHasPermission') permissions: string[];
<<<<<<< Updated upstream
<<<<<<< Updated upstream

  constructor(private auth: AuthService,
=======
  subs: Subscription;
  constructor(
    private auth: AuthService,
>>>>>>> Stashed changes
=======
  subs: Subscription;
  constructor(
    private auth: AuthService,
>>>>>>> Stashed changes
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
  ngOnInit() {
    this.subs = this.auth.currentUser.subscribe(user => {
      if (this.auth.hasPermissions(this.permissions)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
}
