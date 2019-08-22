import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NflPreComponent } from './nfl-pre.component';

describe('NflPreComponent', () => {
  let component: NflPreComponent;
  let fixture: ComponentFixture<NflPreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NflPreComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NflPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
