import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhcbarComponent } from './whcbar.component';

describe('WhcbarComponent', () => {
  let component: WhcbarComponent;
  let fixture: ComponentFixture<WhcbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhcbarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhcbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
