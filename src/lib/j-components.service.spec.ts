import { TestBed } from '@angular/core/testing';

import { JComponentsService } from './j-components.service';

describe('JComponentsService', () => {
  let service: JComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
