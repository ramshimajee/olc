import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershiptypeeditComponent } from './membershiptypeedit.component';

describe('MembershiptypeeditComponent', () => {
  let component: MembershiptypeeditComponent;
  let fixture: ComponentFixture<MembershiptypeeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembershiptypeeditComponent]
    });
    fixture = TestBed.createComponent(MembershiptypeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
