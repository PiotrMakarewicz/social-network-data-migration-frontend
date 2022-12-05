import { TestBed } from '@angular/core/testing';

import { SqlSchemaVisualizationService } from './sql-schema-visualization.service';

describe('SqlSchemaVisualizationService', () => {
  let service: SqlSchemaVisualizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlSchemaVisualizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
