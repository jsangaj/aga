import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BteacherPage } from './bteacher.page';

describe('BteacherPage', () => {
  let component: BteacherPage;
  let fixture: ComponentFixture<BteacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BteacherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BteacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
