import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table3Component } from './table3.component';

describe('Table3Component', () => {
  let component: Table3Component;
  let fixture: ComponentFixture<Table3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table3Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
