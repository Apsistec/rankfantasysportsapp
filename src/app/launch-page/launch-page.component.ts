import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { User } from '../core/user';


@Component ({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.scss']
})

export class LaunchPageComponent {
  
  
  subscriptions;
  loading = false;

  constructor(
    public auth: AuthService,
    public functions: AngularFireFunctions,
  ) { }
    
    
    
    
    async gitSubscriptions() {
      const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeGitSubscriptions');
    await fun({ uid: user.uid });
    }
    async cancelSubscriptions() {
      const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeCancelSubscription');
    await fun({ uid: user.uid });
    }

  
  
  
}
