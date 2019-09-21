import { AuthService } from './../services/auth.service';
import { Directive, TemplateRef, ViewContainerRef, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective implements OnInit {
  // subscription: Subscription;

  @Input('appHasPermission') permissions: string[];

  constructor(private auth: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

    ngOnInit() {
      this.auth.currentUser.subscribe(user => {
        if (this.auth.hasPermissions(this.permissions)) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
    }
  // ngOnDestroy(): void {
  //   // Called once, before the instance is destroyed.
  //   // Add 'implements OnDestroy' to the class.
  //   this.subscription.unsubscribe();
  // }
}
