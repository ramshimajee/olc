import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionviewComponent } from './institutionview.component';

describe('InstitutionviewComponent', () => {
  let component: InstitutionviewComponent;
  let fixture: ComponentFixture<InstitutionviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutionviewComponent]
    });
    fixture = TestBed.createComponent(InstitutionviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
