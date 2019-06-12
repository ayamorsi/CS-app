import { Component , OnInit } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {AngularFireDatabase} from  'angularfire2/database';
import firebase from '../../../node_modules/firebase';
import { AngularFireStorage ,AngularFireUploadTask} from '../../../node_modules/angularfire2/storage';
import { UploadServiceProvider } from '../../providers/upload-service/upload-service';
import { Upload } from '../../providers/upload-service/Upload';
import * as _ from 'underscore';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { tap } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html',
})
export class GradesPage   {
  // selectedFiles: FileList;
  // currentUpload: Upload;
  // downloadURL: Observable<string>;
  // task: any;
  // Main task 

  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;
  getDownloadURL: Observable<any>
  // State for dropzone CSS toggling
  isHovering: boolean;


 constructor(private upSvc: UploadServiceProvider , private storage: AngularFireStorage) {}

//  detectFiles(event) {
//   this.selectedFiles = event.target.files;
// }

// uploadSingle() {
// let file = this.selectedFiles.item(0)
// this.currentUpload = new Upload(file);
// this.upSvc.pushUpload(this.currentUpload)

// let storage = firebase.storage();
//  let storageRef =storage.ref('uploads');
// storageRef.getDownloadURL().then(function(url) {
//   console.log(url);
// });
// }

// uploadMulti() {
// let files = this.selectedFiles
// let filesIndex = _.range(files.length)
// _.each(filesIndex, (idx) => {
//   this.currentUpload = new Upload(files[idx]);
//   this.upSvc.pushUpload(this.currentUpload)}
// )
}