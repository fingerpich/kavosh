import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedBoxComponent } from './related-box.component';

describe('RelatedBoxComponent', () => {
  let component: RelatedBoxComponent;
  let fixture: ComponentFixture<RelatedBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
