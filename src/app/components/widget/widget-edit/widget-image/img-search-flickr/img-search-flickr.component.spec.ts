import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSearchFlickrComponent } from './img-search-flickr.component';

describe('ImgSearchFlickrComponent', () => {
  let component: ImgSearchFlickrComponent;
  let fixture: ComponentFixture<ImgSearchFlickrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgSearchFlickrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSearchFlickrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
