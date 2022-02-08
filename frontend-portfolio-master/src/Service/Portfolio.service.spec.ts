import { TestBed } from '@angular/core/testing';
import {PortfolioService} from '../Service/Portfolio.service';

describe('PortfolioService', () => {
  let  service: PortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // @ts-ignore
    service = TestBed.inject(service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
