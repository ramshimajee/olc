import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinstitutionComponent } from './getinstitution.component';

describe('GetinstitutionComponent', () => {
  let component: GetinstitutionComponent;
  let fixture: ComponentFixture<GetinstitutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetinstitutionComponent]
    });
    fixture = TestBed.createComponent(GetinstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
