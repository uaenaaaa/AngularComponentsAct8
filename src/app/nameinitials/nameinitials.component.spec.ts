import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameinitialsComponent } from './nameinitials.component';

describe('NameinitialsComponent', () => {
  let component: NameinitialsComponent;
  let fixture: ComponentFixture<NameinitialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameinitialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameinitialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
