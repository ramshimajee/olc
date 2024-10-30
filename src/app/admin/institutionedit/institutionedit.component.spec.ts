import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutioneditComponent } from './institutionedit.component';

describe('InstitutioneditComponent', () => {
  let component: InstitutioneditComponent;
  let fixture: ComponentFixture<InstitutioneditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutioneditComponent]
    });
    fixture = TestBed.createComponent(InstitutioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
