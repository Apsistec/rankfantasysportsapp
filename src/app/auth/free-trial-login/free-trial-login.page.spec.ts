import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTrialLoginPage } from './free-trial-login.page';

describe('FreeTrialLoginPage', () => {
  let component: FreeTrialLoginPage;
  let fixture: ComponentFixture<FreeTrialLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTrialLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTrialLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
