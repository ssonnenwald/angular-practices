import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidDependencyInversionComponent } from './solid-dependency-inversion.component';

describe('SolidDependencyInversionComponent', () => {
  let component: SolidDependencyInversionComponent;
  let fixture: ComponentFixture<SolidDependencyInversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolidDependencyInversionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolidDependencyInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
