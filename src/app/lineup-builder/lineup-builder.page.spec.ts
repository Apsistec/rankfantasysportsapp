import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LineupBuilderPage } from './lineup-builder.page';

describe('LineupBuilderPage', () => {
  let component: LineupBuilderPage;
  let fixture: ComponentFixture<LineupBuilderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineupBuilderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LineupBuilderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
