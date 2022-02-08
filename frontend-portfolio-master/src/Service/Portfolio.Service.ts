import {environment} from '../environments/environment';
import { Portfolio} from '../Models/Portfolio';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class  PortfolioService {
  portfolioService: PortfolioService[];

  constructor(private http: HttpClient) {
  }

  public OngetParcours(): Observable<Portfolio[]> {
    const baseUrl = environment.baseUrl;
    return this.http.get<Portfolio[]>(baseUrl + '/Parcours/academique');
  }
}
