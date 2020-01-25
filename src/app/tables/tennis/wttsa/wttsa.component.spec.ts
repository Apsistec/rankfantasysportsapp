import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WttsaComponent } from './wttsa.component';

describe('WttsaComponent', () => {
  let component: WttsaComponent;
  let fixture: ComponentFixture<WttsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WttsaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WttsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
