import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupviewComponent } from './signupview.component';

describe('SignupviewComponent', () => {
  let component: SignupviewComponent;
  let fixture: ComponentFixture<SignupviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupviewComponent]
    });
    fixture = TestBed.createComponent(SignupviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
