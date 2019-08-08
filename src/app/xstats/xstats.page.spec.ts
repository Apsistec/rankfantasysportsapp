import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XstatsPage } from './xstats.page';

describe('XstatsPage', () => {
  let component: XstatsPage;
  let fixture: ComponentFixture<XstatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XstatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XstatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
