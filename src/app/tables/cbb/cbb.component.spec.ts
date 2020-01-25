import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbbComponent } from './cbb.component';

describe('CbbComponent', () => {
  let component: CbbComponent;
  let fixture: ComponentFixture<CbbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbbComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
