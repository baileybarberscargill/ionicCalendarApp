
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  declarations: [
    CalendarModule
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
    CalendarModule
  ],
  exports: [
    CalendarModule
  ]
})
export class CalendarPageModule {}