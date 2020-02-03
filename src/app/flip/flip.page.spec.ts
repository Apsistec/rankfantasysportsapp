import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlipPage } from './flip.page';

describe('FlipPage', () => {
  let component: FlipPage;
  let fixture: ComponentFixture<FlipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
