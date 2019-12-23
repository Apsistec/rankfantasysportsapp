import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NowComponent } from './now.component';

describe('NowComponent', () => {
  let component: NowComponent;
  let fixture: ComponentFixture<NowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
