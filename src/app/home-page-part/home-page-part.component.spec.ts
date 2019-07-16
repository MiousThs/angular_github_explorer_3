import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePartComponent } from './home-page-part.component';

describe('HomePagePartComponent', () => {
  let component: HomePagePartComponent;
  let fixture: ComponentFixture<HomePagePartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePagePartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
