import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table5Component } from './table5.component';

describe('Table5Component', () => {
  let component: Table5Component;
  let fixture: ComponentFixture<Table5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table5Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
