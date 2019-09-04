import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTrialPage } from './free-trial.page';

describe('FreeTrialPage', () => {
  let component: FreeTrialPage;
  let fixture: ComponentFixture<FreeTrialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTrialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTrialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
