import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgegroupclassifierComponent } from './agegroupclassifier.component';

describe('AgegroupclassifierComponent', () => {
  let component: AgegroupclassifierComponent;
  let fixture: ComponentFixture<AgegroupclassifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgegroupclassifierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgegroupclassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
