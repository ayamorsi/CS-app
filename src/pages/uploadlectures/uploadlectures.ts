import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UploadServiceProvider } from '../../providers/upload-service/upload-service';
import { Upload } from '../../providers/upload-service/Upload';
import * as _ from "lodash";




@IonicPage()
@Component({
  selector: 'page-uploadlectures',
  templateUrl: 'uploadlectures.html',
})
export class UploadlecturesPage {
  selectedFiles: FileList;
  currentUpload: Upload;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private upSvc: UploadServiceProvider) { }

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
