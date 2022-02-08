import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class  WorkService {
  workservice: WorkService[];
  private baseUrl: 'http://localhost:8080';
  constructor(private http: HttpClient) {
  }
  }
