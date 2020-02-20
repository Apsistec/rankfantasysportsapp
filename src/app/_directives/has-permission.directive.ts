import { AuthService } from "../_services/auth.service";
import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
import { Subscription } from "rxjs";

@Directive({
  selector: "[appHasPermission]"
})
export class HasPermissionDirective implements OnInit, OnDestroy {
  @Input("appHasPermission") permissions: string[];
  subs: Subscription;

  constructor(
    private auth: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

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
}
