import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfComponent } from './golf.component';

describe('GolfComponent', () => {
  let component: GolfComponent;
  let fixture: ComponentFixture<GolfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
