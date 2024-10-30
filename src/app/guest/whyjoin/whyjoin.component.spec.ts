import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyjoinComponent } from './whyjoin.component';

describe('WhyjoinComponent', () => {
  let component: WhyjoinComponent;
  let fixture: ComponentFixture<WhyjoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyjoinComponent]
    });
    fixture = TestBed.createComponent(WhyjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
