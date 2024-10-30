import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeofConductComponent } from './codeof-conduct.component';

describe('CodeofConductComponent', () => {
  let component: CodeofConductComponent;
  let fixture: ComponentFixture<CodeofConductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeofConductComponent]
    });
    fixture = TestBed.createComponent(CodeofConductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
