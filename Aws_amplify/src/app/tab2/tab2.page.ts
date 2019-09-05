import { Component } from '@angular/core';
import { AmplifyService }  from 'aws-amplify-angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  usernameAttributes = "email"; 
  signedIn: boolean;
    user: any;
    greeting: string;
  constructor(private amplifyService:AmplifyService){
   
    this.amplifyService.authStateChange$
    .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          console.log("No user");
            this.user = null;
        } else {
            this.user = authState.user;
            this.greeting = "Hello " + this.user.username;
        }
});
  }

 public signUpConfig = {
    header: 'Welcome To Masters Kitchen',
    hideAllDefaults: true,
    defaultCountryCode: '91',
    hiddenDefaults: ['username'],
    signUpFields: [
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password'
      },
      // {
      //   label: 'Phone Number',
      //   key: 'phone_number',
      //   required: true,
     
      //   displayOrder: 3,
      //   type: 'string'
      // }
    ]
  }


}
