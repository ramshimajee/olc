import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventseditComponent } from './eventsedit.component';

describe('EventseditComponent', () => {
  let component: EventseditComponent;
  let fixture: ComponentFixture<EventseditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventseditComponent]
    });
    fixture = TestBed.createComponent(EventseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
