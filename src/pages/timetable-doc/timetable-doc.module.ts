import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimetableDocPage } from './timetable-doc';

@NgModule({
  declarations: [
    TimetableDocPage,
  ],
  imports: [
    IonicPageModule.forChild(TimetableDocPage),
  ],
})
export class TimetableDocPageModule {}
