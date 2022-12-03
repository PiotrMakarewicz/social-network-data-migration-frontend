import { TestBed } from '@angular/core/testing';

import { GraphVisualizationService } from './graph-visualization.service';

describe('GraphVisualizationService', () => {
  let service: GraphVisualizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphVisualizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
