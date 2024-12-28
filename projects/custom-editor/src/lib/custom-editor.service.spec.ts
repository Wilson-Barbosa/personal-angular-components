import { TestBed } from '@angular/core/testing';

import { CustomEditorService } from './custom-editor.service';

describe('CustomEditorService', () => {
  let service: CustomEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
