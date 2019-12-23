import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TennisComponent } from './tennis.component';

describe('TennisComponent', () => {
  let component: TennisComponent;
  let fixture: ComponentFixture<TennisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TennisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
