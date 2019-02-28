import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';

import {AngularFireDatabase} from  'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  items: Observable<any[]>;
  authors:Observable<any>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen , db:AngularFireDatabase) {
    this.authors=db.object('/authors/1').valueChanges();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

