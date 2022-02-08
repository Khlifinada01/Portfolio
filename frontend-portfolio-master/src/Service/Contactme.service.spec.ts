import { TestBed } from '@angular/core/testing';
import {ContactmeService} from '../Service/Contactme.service';

describe('ContactmeService', () => {
  let  service: ContactmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // @ts-ignore
    service = TestBed.inject(contactmeService);
  });

  it('should be created', () => {
    // @ts-ignore
    expect(service).toBeTruthy();
  });
});
