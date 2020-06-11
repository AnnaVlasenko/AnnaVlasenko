import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  
  @Input() currentDateChild : Date

  event =  { 
    title : "defaultName" , 
    start :  this.currentDateChild , 
    allDay :  true 
  }
  
  @Output() sendEvent = new EventEmitter<object>() ;
  

  constructor() { }

  ngOnInit(): void {
    
    console.log(this.currentDateChild)

  }
  addEvent(value : string){
    this.event = {
            title : value,
            start: this.currentDateChild,
            allDay: true
           }
           console.log(this.event)
           this.sendEvent.emit(this.event)
  }

}
