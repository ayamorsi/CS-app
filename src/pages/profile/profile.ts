import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import firebase from '../../../node_modules/firebase';
import { profile } from '../../models/profile';
import { User } from '../../models/User';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user = {} as User;
  profData: AngularFireObject<profile>
  profileData: Observable<any>;
  fullName: string;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  loginAs: string;
 
  constructor (
    public navCtrl: NavController, 
    public navParams: NavParams , 
    private afDatabase:AngularFireDatabase,
    private toast :ToastController,
    private afAuth :AngularFireAuth,
  ) {
         
    if (!firebase.apps.length) {
      firebase.initializeApp({});
   }

    }

    // ionViewWillLoad
    StudentDoctor() {
      this.afAuth.authState.take(1).subscribe(user => {
        if (user.email.substring(0, 2) == "DR") {
          this.loginAs = "doctor";
        }
        else {
          this.loginAs = "student";
        }
      })
      this.afAuth.authState.take(1).subscribe(user =>{
        if (user && user.email && user.uid){
          this.toast.create({
            message: ` Welcome to Cs_App, ${user.email}`,
            duration: 2000
          }).present(); 

        this.profileData = this.afDatabase.object(`profile/${user.uid}`).valueChanges();


        }
        else{
          this.toast.create({
            message: ' could not find authentication details.',
            duration: 2000
          }).present();
        }
      })
    }
    
    
getDataFromFireBase(){

this.afAuth.authState.take(1).subscribe(data =>{
  if (data && data.email && data.uid){
  this.profileData = this.afDatabase.object(`courses/${data.uid}`).valueChanges();
  this.profData = this.afDatabase.object(`courses/${data.uid}`);
  }
  
})

}
}
