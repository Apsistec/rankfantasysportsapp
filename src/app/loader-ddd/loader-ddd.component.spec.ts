import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderDddComponent } from './loader-ddd.component';

describe('LoaderDddComponent', () => {
  let component: LoaderDddComponent;
  let fixture: ComponentFixture<LoaderDddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderDddComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderDddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
