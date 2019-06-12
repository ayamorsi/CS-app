import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from  'angularfire2/database';
import { profile } from '../../models/profile';
import {TabsPage} from '../tabs/tabs';
import {AngularFireAuth} from 'angularfire2/auth';
import {FormBuilder , FormGroup , Validators , AbstractControl} from '@angular/forms';

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
  toast: any;
  loginAs: string;
  profileData: any;

constructor(
  private afAuth : AngularFireAuth,
  private afDatabase:AngularFireDatabase, 
  public navCtrl: NavController,
  public navParams: NavParams,
  public formbuilder:FormBuilder
) {
    this.formgroup = formbuilder.group({
      fullname:['',Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ].{10,15}$'),
        ])],
      level:['',Validators.required],
      gender:['',Validators.required],
    });
    this.fullname = this.formgroup.controls['fullname'];
    this.level = this.formgroup.controls['level'];
    this.gender = this.formgroup.controls['gender'];
  }
  ionViewWillLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
      if (data.email.substring(0, 2) == "DR") {
        this.loginAs = "doctor";
      }
      else {
        this.loginAs = "student";
      }
      if (data && data.email && data.uid)
      {
        this.toast.create({
          message: ` create your profile ya 7omar, ${data.email}`,
          duration: 2000
        }).present(); 
        this.profileData = this.afDatabase.object(`proffile/${data.uid}`).valueChanges();
      }
      else
      {
        this.toast.create({
          message: ' could not find authentication details.',
          duration: 2000
        }).present();
      }
    })
  }
  createprofile(){
    this.afAuth.authState.take(1).subscribe(auth =>{
    this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
    .then(()=> this.navCtrl.setRoot(TabsPage))
    })
  }
}



