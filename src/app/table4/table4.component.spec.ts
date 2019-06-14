import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table4Component } from './table4.component';

describe('Table4Component', () => {
  let component: Table4Component;
  let fixture: ComponentFixture<Table4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table4Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
