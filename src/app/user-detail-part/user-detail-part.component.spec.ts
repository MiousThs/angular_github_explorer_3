import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailPartComponent } from './user-detail-part.component';

describe('UserDetailPartComponent', () => {
  let component: UserDetailPartComponent;
  let fixture: ComponentFixture<UserDetailPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
