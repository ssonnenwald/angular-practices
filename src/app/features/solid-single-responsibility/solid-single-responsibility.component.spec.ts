import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidSingleResponsibilityComponent } from './solid-single-responsibility.component';

describe('SolidSingleResponsibilityComponent', () => {
  let component: SolidSingleResponsibilityComponent;
  let fixture: ComponentFixture<SolidSingleResponsibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolidSingleResponsibilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolidSingleResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
