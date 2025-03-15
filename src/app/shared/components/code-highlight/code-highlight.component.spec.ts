import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighLightComponent } from './code-highlight.component';

describe('HighLightComponent', () => {
  let component: HighLightComponent;
  let fixture: ComponentFixture<HighLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighLightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HighLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
