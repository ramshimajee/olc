import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateviewComponent } from './stateview.component';

describe('StateviewComponent', () => {
  let component: StateviewComponent;
  let fixture: ComponentFixture<StateviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateviewComponent]
    });
    fixture = TestBed.createComponent(StateviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
