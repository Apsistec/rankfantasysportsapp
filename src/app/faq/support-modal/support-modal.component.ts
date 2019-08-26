import { Component, OnInit, Output, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AuthService } from '../../core/services/auth.service';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';

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
  dismissed = false;
  @Input() user;

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
