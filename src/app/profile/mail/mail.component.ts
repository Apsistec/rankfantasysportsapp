import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { User } from '@models/user';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  user: User;
  constructor(private fun: AngularFireFunctions) {}

  ngOnInit() {}

  sendEmail() {
    const callable = this.fun.httpsCallable('genericEmail');
    callable({
      text:
        ", \n Rank Fantasy Sports has an offer you can't refuse. Join today and receive a week trial on us.",
      subject: 'Rank Fantasy Sports Offer'
    }).subscribe();
  }
}
