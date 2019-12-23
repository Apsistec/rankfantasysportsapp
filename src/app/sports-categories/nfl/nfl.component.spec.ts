import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NflComponent } from './nfl.component';

describe('NflComponent', () => {
  let component: NflComponent;
  let fixture: ComponentFixture<NflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NflComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
