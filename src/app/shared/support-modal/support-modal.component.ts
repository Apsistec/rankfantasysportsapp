import { Component, OnInit, Input } from "@angular/core";
import { NavParams } from "@ionic/angular";
import { ModalController } from "@ionic/angular";

import { AuthService } from 'src/app/core/auth.service';
// import { ngForm } from "@angular/forms";

export class supportData {
  displayName: string;
  email: string;
  issue: string;
  discription: string;
}

@Component({
  selector: "app-support-modal",
  templateUrl: "./support-modal.component.html",
  styleUrls: ["./support-modal.component.scss"]
})
export class SupportModalComponent implements OnInit {
  // Data passed in by componentProps
  @Input() issue: string;
  @Input() discription: string;
  modal;
  dismissed = false;

    constructor(
    public navParams: NavParams,
    public auth: AuthService,
    public modalCtrl: ModalController
  ) { }
  

  ngOnInit() {
    this.dismissed = false;
  }
  async getUser() {
   await this.auth.getUser();
  }



  dismiss() {

    this.modalCtrl.dismiss({
      dismissed: true
    })
  }

  async sendRequestOnDismiss() {
    const { data } = await this.modal.onWillDismiss();
  }


}
