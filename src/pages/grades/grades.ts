import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {AngularFireDatabase} from  'angularfire2/database';
import firebase from '../../../node_modules/firebase';
import { AngularFireStorage } from '../../../node_modules/angularfire2/storage';
import { Base64 } from '@ionic-native/base64/ngx';



@IonicPage()
@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html',
})
export class GradesPage   {
  filePath : any;
 constructor(private db: AngularFireDatabase,
   private afStorage: AngularFireStorage ,
   private base64: Base64 ,
  ) {}

 uploadFile() {
   let storageRef = firebase.storage().ref();
      this.base64.encodeFile(this.filePath).then((base64File: string) => {
        console.log(base64File);
      }, (err) => {
        console.log(err);
      });
    //   storageRef.putString(filePath, 'base64').then(function(snapshot) {
    //    console.log('Uploaded a base64 string!');
    //  });
}
}
