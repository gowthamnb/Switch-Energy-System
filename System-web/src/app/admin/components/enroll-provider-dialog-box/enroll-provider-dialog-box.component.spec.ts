import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollProviderDialogBoxComponent } from './enroll-provider-dialog-box.component';

describe('EnrollProviderDialogBoxComponent', () => {
  let component: EnrollProviderDialogBoxComponent;
  let fixture: ComponentFixture<EnrollProviderDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollProviderDialogBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollProviderDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
