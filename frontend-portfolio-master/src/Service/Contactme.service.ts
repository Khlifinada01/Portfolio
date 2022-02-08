import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as url from 'url';




@Injectable({
  providedIn: 'root'
})
export class ContactmeService {
  contact: ContactmeService[];
  private baseUrl: 'http://localhost:8080';


  constructor(private http: HttpClient) {
  }
  onSendInformations(data: string) {
    return this.http.post(this.baseUrl + '/informations/OnSend', data);

  }
}
