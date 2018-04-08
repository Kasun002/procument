import { TestBed, inject } from '@angular/core/testing';

import { ListnerService } from './listner.service';

describe('ListnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListnerService]
    });
  });

  it('should be created', inject([ListnerService], (service: ListnerService) => {
    expect(service).toBeTruthy();
  }));
});
