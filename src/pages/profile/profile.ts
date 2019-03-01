import { Component } from '@angular/core';
//import {storage , initializeApp} from 'firebase';
//import { FIRBASE_cREDENTIALS } from '../../app/firbase.credentials';
import { Camera } from '@ionic-native/camera';
import { AngularFireAuth } from 'angularfire2/auth';
//import { FileTransfer } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import firebase from '../../../node_modules/firebase';
import { profile } from '../../models/profile';




@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 
  profData: AngularFireObject<profile>

  profileData: Observable<any>;

 fullName;
 ref: AngularFireStorageReference;
 task: AngularFireUploadTask;
 downloadURL :Observable<string>;
 imageURL :string;
 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams , 
    private afDatabase:AngularFireDatabase,
    private toast :ToastController,
    private afAuth :AngularFireAuth,
    private camera: Camera,
    private afStorage: AngularFireStorage
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
  
  upload(event){
    const id= Math.random().toString(36).substring(2);
    this.ref= this.afStorage.ref(id);
    this.task= this.ref.put(event.target.files[0]);
    this.downloadURL= this.task.getDownloadURL()
    this.downloadURL.subscribe(url =>{
      if (url){
        this.imageURL = url
        
      }
      console.log(this.imageURL)
    })
    
    
  }


}
