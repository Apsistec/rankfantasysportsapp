import { Component, OnInit, Output } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth.service';
import { Request } from '../../core/models/request.model';
import { User } from '../../core/models/user';
import { NgForm } from '@angular/forms';

export class Active {
  type: string;
  description: string;
  label: string;
  os: string;
  model: string;
}

@Component({
  selector: 'app-support-modal',
  templateUrl: './support-modal.component.html',
  styleUrls: ['./support-modal.component.scss']
})
export class SupportModalComponent implements OnInit {

  modal;
  dismissed = false;
  user: User;
  @Output() type: string;
  @Output() description: string;

  active: Active;
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

  async onSubmit(active: NgForm) {
    const description = active.value.description;
    const model = active.value.model;
    const os = active.value.os;
    const type = active.value.type;
    await this.cancelModal();
  }

  async cancelModal() {
    await this.modalCtrl.dismiss({
      dismissed: true
  });
  }

}
