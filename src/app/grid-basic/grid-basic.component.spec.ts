import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridBasicComponent } from './grid-basic.component';

describe('GridBasicComponent', () => {
  let component: GridBasicComponent;
  let fixture: ComponentFixture<GridBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridBasicComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
