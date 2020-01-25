import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IconRowComponent } from './icon-row.component';

describe('IconRowComponent', () => {
  let component: IconRowComponent;
  let fixture: ComponentFixture<IconRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconRowComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IconRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
