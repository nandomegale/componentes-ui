import { TestBed } from '@angular/core/testing';

import { ComponentesUiService } from './componentes-ui.service';

describe('ComponentesUiService', () => {
  let service: ComponentesUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentesUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
