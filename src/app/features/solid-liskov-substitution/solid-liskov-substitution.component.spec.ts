import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidLiskovSubstitutionComponent } from './solid-liskov-substitution.component';

describe('SolidLiskovSubstitutionComponent', () => {
  let component: SolidLiskovSubstitutionComponent;
  let fixture: ComponentFixture<SolidLiskovSubstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolidLiskovSubstitutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolidLiskovSubstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
