import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventtypeviewComponent } from './eventtypeview.component';

describe('EventtypeviewComponent', () => {
  let component: EventtypeviewComponent;
  let fixture: ComponentFixture<EventtypeviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventtypeviewComponent]
    });
    fixture = TestBed.createComponent(EventtypeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
