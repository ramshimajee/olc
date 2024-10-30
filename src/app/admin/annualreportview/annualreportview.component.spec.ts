import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualreportviewComponent } from './annualreportview.component';

describe('AnnualreportviewComponent', () => {
  let component: AnnualreportviewComponent;
  let fixture: ComponentFixture<AnnualreportviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnualreportviewComponent]
    });
    fixture = TestBed.createComponent(AnnualreportviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
