import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollSmartMeterDialogBoxComponent } from './enroll-smart-meter-dialog-box.component';

describe('EnrollSmartMeterDialogBoxComponent', () => {
  let component: EnrollSmartMeterDialogBoxComponent;
  let fixture: ComponentFixture<EnrollSmartMeterDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollSmartMeterDialogBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollSmartMeterDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
