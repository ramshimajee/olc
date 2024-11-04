import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateeditComponent } from './stateedit.component';

describe('StateeditComponent', () => {
  let component: StateeditComponent;
  let fixture: ComponentFixture<StateeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateeditComponent]
    });
    fixture = TestBed.createComponent(StateeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
