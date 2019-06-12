import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignPage  } from '../pages/sign/sign';
import {ProfilePage} from '../pages/profile/profile';
import { CoursesPage } from '../pages/courses/courses';
import { TimetablePage } from '../pages/timetable/timetable';
import { GradesPage } from '../pages/grades/grades';
import { TabsPage } from '../pages/tabs/tabs';
import { CreateprofilePage } from '../pages/createprofile/createprofile';
import{ AngularFireModule} from 'angularfire2';
import {FIRBASE_cREDENTIALS} from './firbase.credentials'
import {AngularFireDatabaseModule} from  'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import{Camera} from '@ionic-native/camera'
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireStorageModule} from 'angularfire2/storage';
import { UploadServiceProvider } from '../providers/upload-service/upload-service';
import { DoctorsPage } from '../pages/doctors/doctors';
import { AngularFirestoreModule } from 'angularfire2/firestore';

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
    DoctorsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIRBASE_cREDENTIALS),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFirestoreModule
    

    
    
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
    DoctorsPage
  ],
  providers: [
    StatusBar,
    SplashScreen , 
    Camera,
    FileChooser,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UploadServiceProvider
  ]
})
export class AppModule {}
