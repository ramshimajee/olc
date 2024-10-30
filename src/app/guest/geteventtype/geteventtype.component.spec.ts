import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeteventtypeComponent } from './geteventtype.component';

describe('GeteventtypeComponent', () => {
  let component: GeteventtypeComponent;
  let fixture: ComponentFixture<GeteventtypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeteventtypeComponent]
    });
    fixture = TestBed.createComponent(GeteventtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
