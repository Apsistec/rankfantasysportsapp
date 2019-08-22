import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NflPage } from './nfl.page';

describe('NflPage', () => {
  let component: NflPage;
  let fixture: ComponentFixture<NflPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NflPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NflPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
