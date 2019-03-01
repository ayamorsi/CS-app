import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {AngularFireDatabase} from  'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import { courses } from '../../models/courses';
import { TimetablePage} from '../timetable/timetable';
import firebase from '../../../node_modules/firebase';
import { Observable } from 'rxjs';
import { AngularFireObject , AngularFireList} from  'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage implements OnInit {
  profData: AngularFireList<courses>
  profileData: Observable<any>
  subjectarr: any [];
  isChecked: any;
  selectedArray : any [];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams ,
    private afAuth : AngularFireAuth ,
    private afDatabase:AngularFireDatabase,
    private alertCtrl: AlertController,
  ) {
    if (!firebase.apps.length) {
      firebase.initializeApp({});
   }
  }

  ngOnInit(): void {
    this.subjectarr = [

      { val: 'معادلات تفاضليه عاديه', CreditHours: '3' ,  Code:  '213ر', isChecked: false },
      { val: 'نظريه احصائيه',        CreditHours: '3' ,  Code:  'ر243', isChecked: false },
      { val: 'أساسيات برمجد هيكلية', CreditHours: '3' ,  Code:  'ر261', isChecked: false },
      { val: 'نظريه الاعداد ',        CreditHours: '3' ,  Code:  '324ر', isChecked: false },
      { val: 'جبر خطى 1',            CreditHours: '3' ,  Code:  'ر212', isChecked: false },
      { val: 'تفاضل وتكامل 2',       CreditHours: '3' ,  Code:  '211ر', isChecked: false }, 
      { val: 'شبكات حاسب 1',         CreditHours: '3' ,  Code:  'ر264', isChecked: false }, 
      { val: 'برمجة شيئية',          CreditHours: '3' ,  Code:  'ر262', isChecked: false }, 
      { val: 'قواعد بيانات متقدمة ', CreditHours: '3' ,  Code:  '472ر', isChecked: false }, 
      { val: 'ذكاء اصطناعى متقدم',  CreditHours: '3' ,  Code:  '474ر', isChecked: false }, 
      { val: 'تحليل وتنظيم النظم ', CreditHours: '3' ,  Code:  '476ر', isChecked: false },
      { val: 'اداره الشبكات',       CreditHours: '3' ,  Code:  '468ر', isChecked: false }, 
      { val: 'الشبكات اللاسلكيه',    CreditHours: '3' ,  Code: '466ر', isChecked: false }, 
      { val: 'المترجمات',           CreditHours: '3' ,  Code: '464ر', isChecked: false }, 
      { val: 'الشبكات العصبيه',     CreditHours: '3' ,  Code: '462ر', isChecked: false },


    ];
    
    this.selectedArray = [];
  }
  
  


  Courses(){

    for(let i = 0; i < this.subjectarr.length; ++ i){
       if (this.subjectarr[i].isChecked == true){
        if (this.selectedArray.length > 5)
        {
          this.alertCtrl.create(
            {
              title: 'you have exceed the limit of registered courses',
              subTitle: 'Please Try again',
              buttons: ['Dismiss']
            }
          ).present() 
          this.selectedArray.length = 0; 
        }
        this.selectedArray.push( this.subjectarr[i]);  
      }
    }
        


    
  if (this.selectedArray.length <=5) {
      this.afAuth.authState.take(1).subscribe(auth =>{
        this.afDatabase.object(`courses/${auth.uid}`).set(this.selectedArray)
        .then(()=> this.navCtrl.setRoot(TimetablePage))
         })
  }
}

}

  