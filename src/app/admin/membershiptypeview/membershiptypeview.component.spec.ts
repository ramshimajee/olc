import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershiptypeviewComponent } from './membershiptypeview.component';

describe('MembershiptypeviewComponent', () => {
  let component: MembershiptypeviewComponent;
  let fixture: ComponentFixture<MembershiptypeviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembershiptypeviewComponent]
    });
    fixture = TestBed.createComponent(MembershiptypeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
