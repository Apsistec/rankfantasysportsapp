import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaPage } from './fifa.page';

describe('FifaPage', () => {
  let component: FifaPage;
  let fixture: ComponentFixture<FifaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
