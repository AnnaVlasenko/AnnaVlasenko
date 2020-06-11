import { Component, ViewChild, OnInit} from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';

import interactionPlugin from '@fullcalendar/interaction';
import { SlideComponent } from './slide/slide.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'full-calendar';

  @ViewChild('calendar') calendarComponent : FullCalendarComponent 
               
  currentDateParent = new Date()

  calendarOptions = { //calendar options 
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2020-06-10' },
      { title: 'event 2', date: '2020-06-11' }
    ]
  };

  handleDateClick(arg) { //Date Click event handler
    console.log('date click! ' + arg.dateStr)
    this.currentDateParent = arg.dateStr
  }

  ngOnInit(){
  }

  receiveEvent($event){  
  let calendarApi = this.calendarComponent.getApi(); 
  calendarApi.addEvent(
    $event
  ) 

  }

}
