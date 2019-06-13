import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { User } from '../../models/User';
import {AngularFireAuth} from 'angularfire2/auth';
import { CreateprofilePage } from '../createprofile/createprofile';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { Observable } from 'rxjs';
import {AngularFireDatabase , AngularFireObject} from  'angularfire2/database';
import { profile } from '../../models/profile';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

})
export class LoginPage {
  user = {} as User; 
  formgroup: FormGroup; 
  email: AbstractControl;
  password: AbstractControl;
  profData: AngularFireObject<profile>

  profileData: Observable<any>

  constructor( private afAuth : AngularFireAuth , public navCtrl: NavController , private alertCtrl: AlertController,
    public formbuilder:FormBuilder, ) {
      this.formgroup = formbuilder.group({
         email: [
           '', Validators.compose([
            Validators.required, 
            Validators.email
           ])
         ],
         password: [
           '', Validators.compose([
             Validators.required,
             Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
           ])
         ],
         
       });
     this.email = this.formgroup.controls['email'];
     this.password = this.formgroup.controls['password'];
   
   }
  
  async login(user:User) 
  {
    if (this.user.email == null || this.user.password == null) {
      this.alertCtrl.create(
        {
          title: 'Please Enter Email and Password',
          subTitle: 'The Email or Password are Empty',
          buttons: ['Dismiss']
        }
      ).present()
  
    }
    try {
/*if (result) {
  this.navCtrl.push(CreateprofilePage)
}*/

this.afAuth.authState
      .first()
      .subscribe(data => {
        if (data && data.email && data.uid) {
          this.navCtrl.push(TabsPage)
        } else {
          this.navCtrl.push(CreateprofilePage)
        }
      });
    }
    

    catch (e) {
      console.error(e);
    }
 
  }




}


