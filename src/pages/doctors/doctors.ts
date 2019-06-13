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

 
  
  getDataFromFireBase(){

    this.afAuth.authState.take(1).subscribe(data =>{
      if (data && data.email && data.uid){
      this.profileData = this.afDatabase.object(`courses/${data.uid}`).valueChanges();
      this.profData = this.afDatabase.object(`courses/${data.uid}`);
      }
      
    })
    
    }

    timeTable(){
  this.navCtrl.setRoot(TimetableDocPage);
    }

}
