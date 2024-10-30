import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbylawComponent } from './getbylaw.component';

describe('GetbylawComponent', () => {
  let component: GetbylawComponent;
  let fixture: ComponentFixture<GetbylawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetbylawComponent]
    });
    fixture = TestBed.createComponent(GetbylawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
