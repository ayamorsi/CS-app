import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from  'angularfire2/database';
import { profile } from '../../models/profile';
import {TabsPage} from '../tabs/tabs';
import {AngularFireAuth} from 'angularfire2/auth';
import {FormBuilder , FormGroup , Validators , AbstractControl} from '@angular/forms';
// import { auth } from 'firebase';

@IonicPage()
@Component({
  selector: 'page-createprofile',
  templateUrl: 'createprofile.html',
})
export class CreateprofilePage {

profile = {} as profile;
formgroup: FormGroup;
fullname: AbstractControl;
level: AbstractControl;
gender: AbstractControl;

constructor( private afAuth : AngularFireAuth ,private afDatabase:AngularFireDatabase, 
  public navCtrl: NavController, public navParams: NavParams,
  public formbuilder:FormBuilder) {
   this.formgroup = formbuilder.group({
        fullname:['',Validators.compose([
          Validators.required,
        Validators.pattern('[a-zA-Z ].{10,15}$'),
        ]
        )], //compose([Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        level:['',Validators.required],
        gender:['',Validators.required],
      });
    this.fullname = this.formgroup.controls['fullname'];
    this.level = this.formgroup.controls['level'];
    this.gender = this.formgroup.controls['gender'];
  }

  createprofile(){
    this.afAuth.authState.take(1).subscribe(auth =>{
    this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
    .then(()=> this.navCtrl.setRoot(TabsPage))
    })
  }
}



