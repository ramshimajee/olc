import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BylaweditComponent } from './bylawedit.component';

describe('BylaweditComponent', () => {
  let component: BylaweditComponent;
  let fixture: ComponentFixture<BylaweditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BylaweditComponent]
    });
    fixture = TestBed.createComponent(BylaweditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
