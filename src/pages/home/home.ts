import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendarModule } from 'ion2-calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  }

  constructor(public navCtrl: NavController) {

  }

  onViewTitledChanged(title) {
    this.viewTitle = title;
  }

  onTimeSelected(ev) {


  }

  onEventSelected(event) {


  }

}
