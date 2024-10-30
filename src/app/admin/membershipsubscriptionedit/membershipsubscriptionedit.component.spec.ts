import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipsubscriptioneditComponent } from './membershipsubscriptionedit.component';

describe('MembershipsubscriptioneditComponent', () => {
  let component: MembershipsubscriptioneditComponent;
  let fixture: ComponentFixture<MembershipsubscriptioneditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembershipsubscriptioneditComponent]
    });
    fixture = TestBed.createComponent(MembershipsubscriptioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
