import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformaComponent } from './informa.component';

describe('InformaComponent', () => {
  let component: InformaComponent;
  let fixture: ComponentFixture<InformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
