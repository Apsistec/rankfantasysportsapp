import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MhcbarComponent } from './mhcbar.component';

describe('MhcbarComponent', () => {
  let component: MhcbarComponent;
  let fixture: ComponentFixture<MhcbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhcbarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MhcbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
