import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentNewsComponent } from './last-news.component';

describe('RecentNewsComponent', () => {
  let component: RecentNewsComponent;
  let fixture: ComponentFixture<RecentNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
