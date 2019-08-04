import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../services/shared.data.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-book',
  templateUrl: './event-book.component.html',
  styleUrls: ['./event-book.component.css']
})
export class EventBookComponent implements OnInit {

  noOfSeatsData: number[] = [1, 2, 3, 4, 5, 6];

  eventBookingForm: FormGroup;

  isSubmitted  =  false;

  bookingStatusMsg = '';

  constructor(public _SDService: SharedDataService,
              private _route: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createFormGroup();
  }

  /* CREATE VALIDATION FORM GROUP */

  createFormGroup() {
    this.eventBookingForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ])),
      email: ['', [Validators.required, Validators.compose([
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ])]],
      phoneNumber: [null, Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
      noOfSeat: [null, Validators.required],
      attendees: this.formBuilder.array([])
    });
  }

  /* FORM CONTROL GETTER */

  get formControls() {
    return this.eventBookingForm.controls;
  }

  /* HANDLE SUBMIT CLICK */

  handleSubmit() {
    this.isSubmitted = true;
    if (this.eventBookingForm.invalid) {
      return;
    } else {
      console.log(JSON.stringify(this.eventBookingForm.value));
      this.bookingStatusMsg = 'Tickets booked';
      setTimeout(() => {
        this._route.navigate(['event-list']);
      }, 3000);
    }
  }

  /* HANDLE CANCEL CLICK */

  handleCancel() {
    this._route.navigate(['event-list']);
  }

  get attendees() {
    return this.eventBookingForm.get('attendees') as FormArray;
  }

  /* CREATE ATTENDEE DATA */

  handleSeatSelect(event: any) {
    const attendeesCount = +event.target.value;
    this.attendees.controls.length = 0;
    for (let i = 0; i < attendeesCount ; i++) {
      this.attendees.push(this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ])));
    }
  }

}
