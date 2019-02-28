import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import{courses} from '../../models/courses'





@IonicPage()
@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html',
})
export class TimetablePage {
  coursData: Observable<any>
  corfData: AngularFireObject<courses>


  constructor(public navCtrl: NavController, 
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
     this.afDatabase.object(`timetable/${data.uid}`).valueChanges();
    this.afDatabase.object(`timetable/${data.uid}`);
    }

  })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetablePage'); 

  }

}
