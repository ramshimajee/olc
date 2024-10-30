import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetboardmembersComponent } from './getboardmembers.component';

describe('GetboardmembersComponent', () => {
  let component: GetboardmembersComponent;
  let fixture: ComponentFixture<GetboardmembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetboardmembersComponent]
    });
    fixture = TestBed.createComponent(GetboardmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
