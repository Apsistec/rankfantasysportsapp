import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table6Component } from './table6.component';

describe('Table6Component', () => {
  let component: Table6Component;
  let fixture: ComponentFixture<Table6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table6Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
