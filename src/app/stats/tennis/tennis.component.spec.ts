import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisComponent } from './tennis.component';

describe('TennisComponent', () => {
  let component: TennisComponent;
  let fixture: ComponentFixture<TennisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
