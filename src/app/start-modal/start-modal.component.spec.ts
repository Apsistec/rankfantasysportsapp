import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartModalComponent } from './start-modal.component';

describe('StartModalComponent', () => {
  let component: StartModalComponent;
  let fixture: ComponentFixture<StartModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
