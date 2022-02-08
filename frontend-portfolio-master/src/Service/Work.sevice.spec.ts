import { TestBed } from '@angular/core/testing';
import {WorkService} from '../Service/Work.service';

describe('WorkService', () => {
  let  service: WorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // @ts-ignore
    service = TestBed.inject(workService);
  });

  it('should be created', () => {
    // @ts-ignore
    expect(service).toBeTruthy();
  });
});
