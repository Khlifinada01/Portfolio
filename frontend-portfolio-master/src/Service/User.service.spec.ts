import { TestBed } from '@angular/core/testing';
import {UserService} from '../Service/User.service';

describe('UserService', () => {
  let  service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // @ts-ignore
    service = TestBed.inject(userService);
  });

  it('should be created', () => {
    // @ts-ignore
    expect(service).toBeTruthy();
  });
});
