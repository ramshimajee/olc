import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventtypeComponent } from './eventtype.component';

describe('EventtypeComponent', () => {
  let component: EventtypeComponent;
  let fixture: ComponentFixture<EventtypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventtypeComponent]
    });
    fixture = TestBed.createComponent(EventtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
