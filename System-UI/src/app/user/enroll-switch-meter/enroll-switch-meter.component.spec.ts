import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollSwitchMeterComponent } from './enroll-switch-meter.component';

describe('EnrollSwitchMeterComponent', () => {
  let component: EnrollSwitchMeterComponent;
  let fixture: ComponentFixture<EnrollSwitchMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollSwitchMeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollSwitchMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
