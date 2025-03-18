import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidInterfaceSegregationComponent } from './solid-interface-segregation.component';

describe('SolidInterfaceSegregationComponent', () => {
  let component: SolidInterfaceSegregationComponent;
  let fixture: ComponentFixture<SolidInterfaceSegregationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolidInterfaceSegregationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolidInterfaceSegregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
