import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomgreetingComponent } from './customgreeting.component';

describe('CustomgreetingComponent', () => {
  let component: CustomgreetingComponent;
  let fixture: ComponentFixture<CustomgreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomgreetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomgreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
