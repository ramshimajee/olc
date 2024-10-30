import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetaffiliatesComponent } from './getaffiliates.component';

describe('GetaffiliatesComponent', () => {
  let component: GetaffiliatesComponent;
  let fixture: ComponentFixture<GetaffiliatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetaffiliatesComponent]
    });
    fixture = TestBed.createComponent(GetaffiliatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
