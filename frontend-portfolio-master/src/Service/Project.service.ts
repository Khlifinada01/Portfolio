import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {User} from '../Models/User';
import {Portfolio} from '../Models/Portfolio';

@Injectable({
  providedIn: 'root'
})
export class  ProjectService {
  projectService: ProjectService[];
  constructor(private http: HttpClient) {
  }



  public Ajouter(data: any) {
    const baseUrl = environment.baseUrl;
    return this.http.post(baseUrl + '/informations/', data);

  }


}
