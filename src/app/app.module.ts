import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignPage  } from '../pages/sign/sign';
import {ProfilePage} from '../pages/profile/profile';
import { CoursesPage } from '../pages/courses/courses';
import { TimetablePage } from '../pages/timetable/timetable';
import { GradesPage } from '../pages/grades/grades';
import { TabsPage } from '../pages/tabs/tabs';
import { CreateprofilePage } from '../pages/createprofile/createprofile';

//import { FileTransfer } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';
import{ AngularFireModule} from 'angularfire2';
import {FIRBASE_cREDENTIALS} from './firbase.credentials'
import {AngularFireDatabaseModule} from  'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import{Camera} from '@ionic-native/camera'
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignPage,
    ProfilePage,
    CoursesPage,
    TimetablePage,
    GradesPage,
    TabsPage,
    CreateprofilePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIRBASE_cREDENTIALS),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule
    

    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignPage,
    ProfilePage,
    CoursesPage,
    TimetablePage,
    GradesPage,
    TabsPage,
    CreateprofilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen , 
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
