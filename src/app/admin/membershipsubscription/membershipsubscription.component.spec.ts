import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipsubscriptionComponent } from './membershipsubscription.component';

describe('MembershipsubscriptionComponent', () => {
  let component: MembershipsubscriptionComponent;
  let fixture: ComponentFixture<MembershipsubscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembershipsubscriptionComponent]
    });
    fixture = TestBed.createComponent(MembershipsubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
