import { TestBed } from '@angular/core/testing';

import { NoticiasHomeService } from './noticias-home.service';

describe('NoticiasHomeService', () => {
  let service: NoticiasHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiasHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
