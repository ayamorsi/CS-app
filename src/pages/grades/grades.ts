import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {AngularFireDatabase} from  'angularfire2/database';
import firebase from '../../../node_modules/firebase';
import { AngularFireStorage } from '../../../node_modules/angularfire2/storage';
import { UploadServiceProvider } from '../../providers/upload-service/upload-service';
import { Upload } from '../../providers/upload-service/Upload';
import * as _ from 'underscore';


@IonicPage()
@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html',
})
export class GradesPage   {
  selectedFiles: FileList;
  currentUpload: Upload;

 constructor(private upSvc: UploadServiceProvider) {}

 detectFiles(event) {
  this.selectedFiles = event.target.files;
}

uploadSingle() {
let file = this.selectedFiles.item(0)
this.currentUpload = new Upload(file);
this.upSvc.pushUpload(this.currentUpload)
}

uploadMulti() {
let files = this.selectedFiles
let filesIndex = _.range(files.length)
_.each(filesIndex, (idx) => {
  this.currentUpload = new Upload(files[idx]);
  this.upSvc.pushUpload(this.currentUpload)}
)
}

}
