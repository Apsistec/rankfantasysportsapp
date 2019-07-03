import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninFramePage } from './signin-frame.page';

describe('SigninFramePage', () => {
  let component: SigninFramePage;
  let fixture: ComponentFixture<SigninFramePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninFramePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninFramePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
