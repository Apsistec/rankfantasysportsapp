import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table8Component } from './table8.component';

describe('Table8Component', () => {
  let component: Table8Component;
  let fixture: ComponentFixture<Table8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table8Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
