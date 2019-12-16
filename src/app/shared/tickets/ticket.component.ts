import { TicketService } from '../../core/services/ticket.service';
import { ModalController, LoadingController, NavParams } from '@ionic/angular';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  // private subscription: Subscription;
  ticketForm: FormGroup;
  id = null;
  user = '';

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private ticket: TicketService,
    private navParam: NavParams,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.ticketForm = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
      status: 0
    });

    this.id = this.navParam.get('id');
    if (this.id) {
      this.ticket.getTicket(this.id).subscribe(ticket => {

        this.ticketForm.patchValue({
          title: ticket['title'],
          desc: ticket['desc'],
          status: ticket['status']
        });

        this.ticketForm.controls['title'].disable();
        // this.ticketForm.controls['desc'].disable();

        this.ticket.getUser(ticket['creator']).subscribe(user => {
          this.user = user['email'];
        });
      });
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async saveOrUpdate() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();

    this.ticket.createOrUpdateTicket(this.id, this.ticketForm.value).then(() => {
      loading.dismiss();
      this.close();
    }, err => {
      loading.dismiss();
    });
  }

  deleteTicket() {
    console.log('delete: ', this.id);
    this.ticket.deleteTicket(this.id).then(() => {
      this.modalCtrl.dismiss();
    });
  }

}
