import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEventList} from "../models/event-list.interface";
import {Router} from "@angular/router";
import {SharedDataService} from "../services/shared.data.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  columnData: any[] = [];

  eventData: IEventList[] = [];

  dummyEventData: IEventList[] = [];

  constructor(private _http: HttpClient, private _route: Router, private _SDService: SharedDataService) {
    this.columnData = [
      {
        'label': ' Name',
        'dataKey': 'eventName'
      },
      {
        'label': ' Image',
        'dataKey': 'eventImage'
      },
      {
        'label': ' Date',
        'dataKey': 'eventDate'
      },
      {
        'label': ' Seats Available',
        'dataKey': 'availableSeats'
      }
    ];
  }

  ngOnInit() {
    this.getEventData();
  }

  /* GET EVENT DATA FROM JSON */

  getEventData() {
    this._http.get('assets/data/eventdata.json').subscribe((res: IEventList[]) => {
      this.eventData = res;
      this.dummyEventData = Object.assign([], this.eventData);
   });

  }

  /*ON BOOK EVENT HANDLE */

  handleBookNow(eventData: IEventList) {
    this._SDService.selectedEventData = eventData;
   this._route.navigate(['book-seat']);
  }

  /* FILTERING OPERATION */

  handleInputEvent(event: any) {
    let resultArray: IEventList[] = [];
    if (event.target.value !== '') {
      this.dummyEventData.filter((item) => {
        if ( item.eventName.toLowerCase().includes(event.target.value.toLocaleLowerCase()) && item.availableSeats !== 0) {
          resultArray.push(item);
        }
      });
    } else {
      resultArray = Object.assign([], this.dummyEventData);
    }

    this.eventData = resultArray;
  }

}
