import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table9Component } from './table9.component';

describe('Table9Component', () => {
  let component: Table9Component;
  let fixture: ComponentFixture<Table9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table9Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
