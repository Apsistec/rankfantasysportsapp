import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/core/auth.service';
import { Request } from '../../core/request.model';
import { User } from '../../core/user';

export class SupportData {
  displayName: string;
  email: string;
  issue: string;
  description: string;
}

@Component({
  selector: 'app-support-modal',
  templateUrl: './support-modal.component.html',
  styleUrls: ['./support-modal.component.scss']
})
export class SupportModalComponent implements OnInit {
  // Data passed in by componentProps
  @Input() issue: string;
  @Input() description: string;
  modal;
  dismissed = false;
  user: User;
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

  async onSubmit(ngForm) {

  }

  async cancelModal() {
    await this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  async sendRequestOnDismiss() {
    const { data } = await this.modal.onWillDismiss();
  }


}
