import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoursesPage } from '../courses/courses';
import { TimetablePage } from '../timetable/timetable';
import { GradesPage } from '../grades/grades';
import {ProfilePage} from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  
  tab1Root = ProfilePage;
  tab2Root = CoursesPage;
  tab3Root = TimetablePage;
  tab4Root = GradesPage;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
