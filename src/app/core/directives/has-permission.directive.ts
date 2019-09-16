import { AuthService } from './../services/auth.service';
import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective implements OnInit {

  @Input('appHasPermission') permissions: string[];

  constructor(private auth: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

    ngOnInit() {
      this.auth.currentUser.subscribe(user => {
        console.log('user in directive: ', user);
        console.log('need permissions: ', this.permissions);

        if (this.auth.hasPermissions(this.permissions)) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      })
    }
}
