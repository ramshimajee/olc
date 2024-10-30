import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardmembersviewComponent } from './boardmembersview.component';

describe('BoardmembersviewComponent', () => {
  let component: BoardmembersviewComponent;
  let fixture: ComponentFixture<BoardmembersviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardmembersviewComponent]
    });
    fixture = TestBed.createComponent(BoardmembersviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
