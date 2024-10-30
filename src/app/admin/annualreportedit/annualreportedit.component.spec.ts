import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualreporteditComponent } from './annualreportedit.component';

describe('AnnualreporteditComponent', () => {
  let component: AnnualreporteditComponent;
  let fixture: ComponentFixture<AnnualreporteditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnualreporteditComponent]
    });
    fixture = TestBed.createComponent(AnnualreporteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
