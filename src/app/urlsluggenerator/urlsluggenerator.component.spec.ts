import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlsluggeneratorComponent } from './urlsluggenerator.component';

describe('UrlsluggeneratorComponent', () => {
  let component: UrlsluggeneratorComponent;
  let fixture: ComponentFixture<UrlsluggeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlsluggeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlsluggeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
