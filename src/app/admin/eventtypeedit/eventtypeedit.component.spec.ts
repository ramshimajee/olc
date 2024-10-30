import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventtypeeditComponent } from './eventtypeedit.component';

describe('EventtypeeditComponent', () => {
  let component: EventtypeeditComponent;
  let fixture: ComponentFixture<EventtypeeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventtypeeditComponent]
    });
    fixture = TestBed.createComponent(EventtypeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
