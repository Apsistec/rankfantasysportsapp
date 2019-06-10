import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table7Component } from './table7.component';

describe('Table7Component', () => {
  let component: Table7Component;
  let fixture: ComponentFixture<Table7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table7Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
