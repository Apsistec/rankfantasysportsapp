import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MttsaComponent } from './mttsa.component';

describe('MttsaComponent', () => {
  let component: MttsaComponent;
  let fixture: ComponentFixture<MttsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MttsaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MttsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
