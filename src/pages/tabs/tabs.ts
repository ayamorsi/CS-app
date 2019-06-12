import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoursesPage } from '../courses/courses';
import { TimetablePage } from '../timetable/timetable';
import { GradesPage } from '../grades/grades';
import {ProfilePage} from '../profile/profile';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';

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
  loginAs: string;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth : AngularFireAuth,
  ) {
  }
  ionViewWillLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
      if (data.email.substring(0, 2) == "DR") {
        this.loginAs = "doctor";
      }
      else {
        this.loginAs = "student";
      }
    })
  }

}
