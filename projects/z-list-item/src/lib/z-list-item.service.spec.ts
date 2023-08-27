import { TestBed } from '@angular/core/testing';

import { ZListItemService } from './z-list-item.service';

describe('ZListItemService', () => {
  let service: ZListItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZListItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
