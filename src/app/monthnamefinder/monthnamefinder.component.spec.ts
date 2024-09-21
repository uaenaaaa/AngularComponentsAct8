import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthnamefinderComponent } from './monthnamefinder.component';

describe('MonthnamefinderComponent', () => {
  let component: MonthnamefinderComponent;
  let fixture: ComponentFixture<MonthnamefinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthnamefinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthnamefinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
