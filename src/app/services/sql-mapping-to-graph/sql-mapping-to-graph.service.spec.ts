import { TestBed } from '@angular/core/testing';

import { SqlMappingToGraphService } from './sql-mapping-to-graph.service';

describe('SqlMappingToGraphService', () => {
  let service: SqlMappingToGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlMappingToGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
