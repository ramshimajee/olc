import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardmemberseditComponent } from './boardmembersedit.component';

describe('BoardmemberseditComponent', () => {
  let component: BoardmemberseditComponent;
  let fixture: ComponentFixture<BoardmemberseditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardmemberseditComponent]
    });
    fixture = TestBed.createComponent(BoardmemberseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
