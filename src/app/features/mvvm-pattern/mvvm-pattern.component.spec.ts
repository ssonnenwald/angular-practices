import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvvmPatternComponent } from './mvvm-pattern.component';

describe('MvvmPatternComponent', () => {
  let component: MvvmPatternComponent;
  let fixture: ComponentFixture<MvvmPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MvvmPatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvvmPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
