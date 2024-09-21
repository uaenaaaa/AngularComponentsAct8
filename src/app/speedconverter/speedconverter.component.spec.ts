import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedconverterComponent } from './speedconverter.component';

describe('SpeedconverterComponent', () => {
  let component: SpeedconverterComponent;
  let fixture: ComponentFixture<SpeedconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeedconverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
