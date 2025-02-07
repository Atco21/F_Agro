import { TestBed } from '@angular/core/testing';

import { QuimicosService } from './quimicos.service';

describe('QuimicosService', () => {
  let service: QuimicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuimicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
