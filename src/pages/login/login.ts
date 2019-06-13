import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { User } from '../../models/User';
import {AngularFireAuth} from 'angularfire2/auth';
import { CreateprofilePage } from '../createprofile/createprofile';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { Observable } from 'rxjs';
import {AngularFireDatabase , AngularFireObject , AngularFireList} from  'angularfire2/database';
import { profile } from '../../models/profile';
import { DoctorsPage } from '../doctors/doctors';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = {} as User;
  formgroup: FormGroup; 
  email: AbstractControl;
  password: AbstractControl;
  profData: AngularFireObject<profile>;
  profileData: Observable<any>;

  constructor (
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private afDatabase:AngularFireDatabase,
    public formbuilder:FormBuilder
  ) {
      this.formgroup = formbuilder.group({
         email: ['', Validators.compose([
            Validators.required, 
            Validators.email
           ])
         ],
         password: ['', Validators.compose([
             Validators.required,
             Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
           ])
         ],
         
       });
     this.email = this.formgroup.controls['email'];
     this.password = this.formgroup.controls['password'];
   }
  
  async login() 
  {
    if (this.user.email == '' || this.user.password == '')
    {
      this.alertCtrl.create(
        {
          title: 'Please Enter Email and Password',
          subTitle: 'The Email or Password are Empty',
          buttons: ['Dismiss']
        }
      ).present()
    }
    try
    {
      const result = this.afAuth.auth.signInWithEmailAndPassword(this.user.email ,this.user.password);
      // if (result) {
      //   this.navCtrl.push(CreateprofilePage)
      // }
      if (this.user.email.substring(0, 2) == "DR"){
        this.navCtrl.push(DoctorsPage)
      }
      else {
        this.navCtrl.push(TabsPage)
      }
    
     }
    catch (e) {
      console.error(e);
    }
  }
}



//   this.afAuth.authState.first().subscribe(user => {
    //     if (user && user.email && user.uid) {
    //       this.navCtrl.push(TabsPage)
    //     } else {
    //       this.navCtrl.push(CreateprofilePage)
    //     }
    //   });