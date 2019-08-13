import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgaPage } from './pga.page';

describe('PgaPage', () => {
  let component: PgaPage;
  let fixture: ComponentFixture<PgaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
