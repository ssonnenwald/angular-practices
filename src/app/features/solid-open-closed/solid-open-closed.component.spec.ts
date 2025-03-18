import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidOpenClosedComponent } from './solid-open-closed.component';

describe('SolidOpenClosedComponent', () => {
  let component: SolidOpenClosedComponent;
  let fixture: ComponentFixture<SolidOpenClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolidOpenClosedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolidOpenClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
