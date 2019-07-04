import { Component, OnInit } from '@angular/core';
import {SharedDataService} from "../services/shared.data.service";

@Component({
  selector: 'app-event-book',
  templateUrl: './event-book.component.html',
  styleUrls: ['./event-book.component.css']
})
export class EventBookComponent implements OnInit {

  constructor(public _SDService: SharedDataService) { }

  ngOnInit() {
  }

}
