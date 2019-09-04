import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerRankingsComponent } from './power-rankings.component';

describe('PowerRankingsComponent', () => {
  let component: PowerRankingsComponent;
  let fixture: ComponentFixture<PowerRankingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerRankingsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
