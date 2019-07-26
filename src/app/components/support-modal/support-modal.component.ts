import { Component, OnInit, Output } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/core/auth.service';
import { Request } from '../../core/request.model';
import { User } from '../../core/user';
import { NgForm } from '@angular/forms';

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

  modal;
  dismissed = false;
  user: User;
  @Output() issue: string;
  @Output() description: string;
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

  async onSubmit(form: NgForm) {
    const issue = form.value.issue;
    const description = form.value.description;
    
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
