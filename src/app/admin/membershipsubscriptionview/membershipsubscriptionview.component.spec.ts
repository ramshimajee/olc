import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipsubscriptionviewComponent } from './membershipsubscriptionview.component';

describe('MembershipsubscriptionviewComponent', () => {
  let component: MembershipsubscriptionviewComponent;
  let fixture: ComponentFixture<MembershipsubscriptionviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembershipsubscriptionviewComponent]
    });
    fixture = TestBed.createComponent(MembershipsubscriptionviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
