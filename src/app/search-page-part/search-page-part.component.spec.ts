import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPagePartComponent } from './search-page-part.component';

describe('SearchPagePartComponent', () => {
  let component: SearchPagePartComponent;
  let fixture: ComponentFixture<SearchPagePartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPagePartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPagePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
