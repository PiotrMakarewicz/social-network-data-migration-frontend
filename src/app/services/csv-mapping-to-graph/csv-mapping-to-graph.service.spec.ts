import { TestBed } from '@angular/core/testing';

import { CsvMappingToGraphService } from './csv-mapping-to-graph.service';

describe('CsvMappingToGraphService', () => {
  let service: CsvMappingToGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsvMappingToGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
