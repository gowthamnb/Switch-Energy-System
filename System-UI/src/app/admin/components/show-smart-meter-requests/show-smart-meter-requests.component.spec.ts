import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSmartMeterRequestsComponent } from './show-smart-meter-requests.component';

describe('ShowSmartMeterRequestsComponent', () => {
  let component: ShowSmartMeterRequestsComponent;
  let fixture: ComponentFixture<ShowSmartMeterRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSmartMeterRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSmartMeterRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
