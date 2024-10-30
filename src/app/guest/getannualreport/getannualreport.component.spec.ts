import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetannualreportComponent } from './getannualreport.component';

describe('GetannualreportComponent', () => {
  let component: GetannualreportComponent;
  let fixture: ComponentFixture<GetannualreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetannualreportComponent]
    });
    fixture = TestBed.createComponent(GetannualreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
