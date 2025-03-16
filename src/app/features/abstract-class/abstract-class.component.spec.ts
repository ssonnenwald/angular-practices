import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractClassComponent } from './abstract-class.component';

describe('AbstractClassComponent', () => {
  let component: AbstractClassComponent;
  let fixture: ComponentFixture<AbstractClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstractClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
