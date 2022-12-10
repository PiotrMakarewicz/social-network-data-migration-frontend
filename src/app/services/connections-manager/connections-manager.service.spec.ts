import { TestBed } from '@angular/core/testing';

import { ConnectionsManagerService } from './connections-manager.service';

describe('ConnectionsManagerService', () => {
  let service: ConnectionsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionsManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
