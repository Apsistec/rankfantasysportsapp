import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loading = false;
  confirmation;
  subscription;
  constructor(
    public auth: AuthService,
    public functions: AngularFireFunctions,
    private router: Router
  ) { }


  ngOnInit() {
  }


  async cancelSubscription() {
    this.loading = true;
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeCancelSubscription');
    this.confirmation = await fun({ uid: user.uid }).toPromise();
    this.loading = false;
    window.alert('You have been unsubscribed. We are sorry to see you go.');
    this.router.navigate(['/home']);
  }
  
  


  async getSubscription()  {
    this.loading = true;
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeGetSubscriptions');
    this.confirmation = await fun({ uid: user.uid }).toPromise();
    this.loading = false;
  }
}
