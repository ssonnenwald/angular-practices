import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalMethodComponent } from './optional-method.component';

describe('OptionalMethodComponent', () => {
  let component: OptionalMethodComponent;
  let fixture: ComponentFixture<OptionalMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionalMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionalMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
