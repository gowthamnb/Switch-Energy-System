import { TestBed } from '@angular/core/testing';

import { SmartMeterService } from './smart-meter.service';

describe('SmartMeterService', () => {
  let service: SmartMeterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartMeterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
