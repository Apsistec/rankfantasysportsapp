import { Component, OnInit, Output, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models/user';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
export class Active {
  @Input() User;
  
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
  dismissed = false;
  user: User;
  @Output() type: string;
  @Output() description: string;
  // @Input(user.displayName) user.displayName:string;
  // @Input(user.email) 'this.user.email': string;
  // modal;

  active: Active;
  constructor(
    public navParams: NavParams,
    public auth: AuthService,
    public modalCtrl: ModalController
  ) { }


  ngOnInit() {
    this.dismissed = false;
    this.auth.getUser(); {
      return this.user;
    }
  }
  async getUser() {
    await this.auth.afAuth.authState.pipe(first()).toPromise();
    return this.user;
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
