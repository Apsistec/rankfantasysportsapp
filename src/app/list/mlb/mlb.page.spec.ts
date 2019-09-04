import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbPage } from './mlb.page';

describe('MlbPage', () => {
  let component: MlbPage;
  let fixture: ComponentFixture<MlbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
