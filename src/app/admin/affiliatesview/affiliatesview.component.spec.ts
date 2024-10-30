import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatesviewComponent } from './affiliatesview.component';

describe('AffiliatesviewComponent', () => {
  let component: AffiliatesviewComponent;
  let fixture: ComponentFixture<AffiliatesviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffiliatesviewComponent]
    });
    fixture = TestBed.createComponent(AffiliatesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
