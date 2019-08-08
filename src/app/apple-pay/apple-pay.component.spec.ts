import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplePayComponent } from './apple-pay.component';

describe('ApplePayComponent', () => {
  let component: ApplePayComponent;
  let fixture: ComponentFixture<ApplePayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplePayComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
