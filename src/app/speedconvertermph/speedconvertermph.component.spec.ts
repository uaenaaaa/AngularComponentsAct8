import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedconvertermphComponent } from './speedconvertermph.component';

describe('SpeedconvertermphComponent', () => {
  let component: SpeedconvertermphComponent;
  let fixture: ComponentFixture<SpeedconvertermphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeedconvertermphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedconvertermphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
