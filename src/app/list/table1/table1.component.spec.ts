import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table1Component } from './table1.component';

describe('Table1Component', () => {
  let component: Table1Component;
  let fixture: ComponentFixture<Table1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table1Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
