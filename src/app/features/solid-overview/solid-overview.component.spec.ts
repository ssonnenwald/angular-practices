import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidOverviewComponent } from './solid-overview.component';

describe('SolidOverviewComponent', () => {
  let component: SolidOverviewComponent;
  let fixture: ComponentFixture<SolidOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolidOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolidOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
