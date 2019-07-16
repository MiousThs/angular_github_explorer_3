import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPreviewPartComponent } from './user-preview-part.component';

describe('UserPreviewPartComponent', () => {
  let component: UserPreviewPartComponent;
  let fixture: ComponentFixture<UserPreviewPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPreviewPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPreviewPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
