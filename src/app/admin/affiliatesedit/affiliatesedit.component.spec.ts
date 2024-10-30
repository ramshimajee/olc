import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateseditComponent } from './affiliatesedit.component';

describe('AffiliateseditComponent', () => {
  let component: AffiliateseditComponent;
  let fixture: ComponentFixture<AffiliateseditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffiliateseditComponent]
    });
    fixture = TestBed.createComponent(AffiliateseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
