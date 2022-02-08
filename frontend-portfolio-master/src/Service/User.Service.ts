import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {User} from '../Models/User';
import {Portfolio} from '../Models/Portfolio';

@Injectable({
  providedIn: 'root'
})
export class  UserService {
  userService: UserService[];
  constructor(private http: HttpClient) {
  }



  public OngetAllInformationsByUserId(userId: number): Observable<User> {
    const baseUrl = environment.baseUrl;
    return this.http.get<User>(baseUrl + '/${userId}');

  }
 public OngetAllInformations(): Observable<User[]> {
    const baseUrl = environment.baseUrl;
    return this.http.get<any>( baseUrl + '/Portfolio/All');
 }

}
