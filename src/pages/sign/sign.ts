import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {AngularFireDatabase} from  'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import { User } from '../../models/User';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {NgForm} from '@angular/forms';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {
  formgroup: FormGroup;
  user = {} as User; 
  email: AbstractControl;
  password: AbstractControl;
  constructor( private afAuth : AngularFireAuth ,
    public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    public formbuilder:FormBuilder) {
     this.formgroup = formbuilder.group({
        email: [
          '', Validators.compose([
            Validators.email,
            Validators.required,
          ])
        ],
        password: [
          '', Validators.compose([
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
            Validators.required,
          ])
        ],
        
      });
    this.email = this.formgroup.controls['email'];
    this.password = this.formgroup.controls['password'];
  
  }
  
   async Register(user:User){
     try {
     const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email , user.password);
     console.log(result);
     this.alertCtrl.create(
      {
        title: 'Success',
        subTitle: "registered Successfully",
        buttons: ['Dismiss']
      }
    ).present()
    this.navCtrl.push(LoginPage);
    }
    
catch (e) {
  console.error(e);
  //alert(e.message);
  this.alertCtrl.create(
    {
      title: 'Error',
      subTitle: e.message,
      buttons: ['Dismiss']
    }
  ).present()
}
  }

  
  
}

