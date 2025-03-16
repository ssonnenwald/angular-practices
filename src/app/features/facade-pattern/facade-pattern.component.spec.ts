import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacadePatternComponent } from './facade-pattern.component';

describe('FacadePatternComponent', () => {
  let component: FacadePatternComponent;
  let fixture: ComponentFixture<FacadePatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacadePatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacadePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
