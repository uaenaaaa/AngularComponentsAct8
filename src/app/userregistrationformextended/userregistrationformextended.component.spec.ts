import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregistrationformextendedComponent } from './userregistrationformextended.component';

describe('UserregistrationformextendedComponent', () => {
  let component: UserregistrationformextendedComponent;
  let fixture: ComponentFixture<UserregistrationformextendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserregistrationformextendedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserregistrationformextendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
