import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringvowelcounterComponent } from './stringvowelcounter.component';

describe('StringvowelcounterComponent', () => {
  let component: StringvowelcounterComponent;
  let fixture: ComponentFixture<StringvowelcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringvowelcounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringvowelcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
