import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BylawviewsComponent } from './bylawviews.component';

describe('BylawviewsComponent', () => {
  let component: BylawviewsComponent;
  let fixture: ComponentFixture<BylawviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BylawviewsComponent]
    });
    fixture = TestBed.createComponent(BylawviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
