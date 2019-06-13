import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicesAuthPage } from './services-auth';

@NgModule({
  declarations: [
    ServicesAuthPage,
  ],
  imports: [
    IonicPageModule.forChild(ServicesAuthPage),
  ],
})
export class ServicesAuthPageModule {}
