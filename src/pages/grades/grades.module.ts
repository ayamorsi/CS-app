import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GradesPage } from './grades';

@NgModule({
  declarations: [
    GradesPage,
  ],
  imports: [
    IonicPageModule.forChild(GradesPage),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class GradesPageModule {}
