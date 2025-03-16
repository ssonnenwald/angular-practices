import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderPatternComponent } from './builder-pattern.component';

describe('BuilderPatternComponent', () => {
  let component: BuilderPatternComponent;
  let fixture: ComponentFixture<BuilderPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuilderPatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
