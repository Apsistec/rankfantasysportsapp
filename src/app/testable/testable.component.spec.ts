import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestableComponent } from './testable.component';

describe('TestableComponent', () => {
  let component: TestableComponent;
  let fixture: ComponentFixture<TestableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestableComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
