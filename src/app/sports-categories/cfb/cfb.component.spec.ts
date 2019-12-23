import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CfbComponent } from './cfb.component';

describe('CfbComponent', () => {
  let component: CfbComponent;
  let fixture: ComponentFixture<CfbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfbComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
