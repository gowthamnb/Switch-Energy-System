import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchProviderBottomSheetComponent } from './switch-provider-bottom-sheet.component';

describe('SwitchProviderBottomSheetComponent', () => {
  let component: SwitchProviderBottomSheetComponent;
  let fixture: ComponentFixture<SwitchProviderBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchProviderBottomSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchProviderBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
