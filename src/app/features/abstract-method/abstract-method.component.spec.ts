import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractMethodComponent } from './abstract-method.component';

describe('AbstractMethodComponent', () => {
  let component: AbstractMethodComponent;
  let fixture: ComponentFixture<AbstractMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstractMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
