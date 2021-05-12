import { Subscription } from 'rxjs';

import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthService } from '../_services/auth.service';

@Directive({
  selector: "[appHasPermission]"
})
export class HasPermissionDirective implements OnInit, OnDestroy {
  @Input("appHasPermission") permissions: string[];
  subs: Subscription;

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.subs =this.authService.currentBehaviorUser.subscribe(user => {
      if (this.authService.hasPermissions(this.permissions)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
