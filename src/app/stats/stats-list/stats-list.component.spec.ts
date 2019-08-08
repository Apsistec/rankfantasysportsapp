import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsListComponent } from './stats-list.component';

describe('StatsListComponent', () => {
  let component: StatsListComponent;
  let fixture: ComponentFixture<StatsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
