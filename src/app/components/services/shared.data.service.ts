import { Injectable } from '@angular/core';
import {IEventList} from "../models/event-list.interface";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  selectedEventData: IEventList;

  constructor() { }
}
