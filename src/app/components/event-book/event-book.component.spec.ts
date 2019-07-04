import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookComponent } from './event-book.component';

describe('EventBookComponent', () => {
  let component: EventBookComponent;
  let fixture: ComponentFixture<EventBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
