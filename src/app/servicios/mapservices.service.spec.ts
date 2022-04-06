import { TestBed } from '@angular/core/testing';

import { MapservicesService } from './mapservices.service';

describe('MapservicesService', () => {
  let service: MapservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
