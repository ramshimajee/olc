import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershiptypeComponent } from './membershiptype.component';

describe('MembershiptypeComponent', () => {
  let component: MembershiptypeComponent;
  let fixture: ComponentFixture<MembershiptypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembershiptypeComponent]
    });
    fixture = TestBed.createComponent(MembershiptypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
