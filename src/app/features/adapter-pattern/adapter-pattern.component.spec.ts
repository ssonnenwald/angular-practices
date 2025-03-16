import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapterPatternComponent } from './adapter-pattern.component';

describe('AdapterPatternComponent', () => {
  let component: AdapterPatternComponent;
  let fixture: ComponentFixture<AdapterPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdapterPatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdapterPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
