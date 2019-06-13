import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import firebase from '../../../node_modules/firebase';
import { profile } from '../../models/profile';
import { User } from '../../models/User';
import { TimetableDocPage } from '../timetable-doc/timetable-doc';
import { UploadlecturesPage } from '../uploadlectures/uploadlectures';

@IonicPage()
@Component({
  selector: 'page-doctors',
  templateUrl: 'doctors.html',
})
export class DoctorsPage {
  user = {} as User;
  profData: AngularFireObject<profile>
  profileData: Observable<any>;
  fullName: string;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;


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
  ionViewWillLoad() {
    this.afAuth.authState.take(1).subscribe(data =>{
      if (data && data.email && data.uid){
        this.toast.create({
          message: ` Welcome to Cs_App, ${data.email}`,
          duration: 2000
        }).present(); 

      this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();


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

    timeTable(){
  this.navCtrl.push(TimetableDocPage);
    }
uploadLec()
{
  this.navCtrl.push(UploadlecturesPage);
}
}
