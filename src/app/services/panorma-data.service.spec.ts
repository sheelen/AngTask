import { TestBed, inject } from '@angular/core/testing';

import { PanormaDataService } from './panorma-data.service';

describe('PanormaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanormaDataService]
    });
  });

  it('should be created', inject([PanormaDataService], (service: PanormaDataService) => {
    expect(service).toBeTruthy();
  }));
});
