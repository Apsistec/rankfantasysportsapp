import { Component, Input } from "@angular/core";
import { NavParams } from "@ionic/angular";

@Component({
  selector: "app-support-modal"
})
export class SupportModalComponent {

  constructor(navParams: NavParams) {
    navParams.get("firstName");
  }
}
