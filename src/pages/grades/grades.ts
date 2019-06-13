import { Component , OnInit } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {AngularFireDatabase} from  'angularfire2/database';
import firebase from '../../../node_modules/firebase';
import { AngularFireStorage ,AngularFireUploadTask} from '../../../node_modules/angularfire2/storage';


@IonicPage()
@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html',
})
export class GradesPage   {
  
 constructor(
   private storage: AngularFireStorage){}
}