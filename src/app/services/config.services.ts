import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface StoredRequest {
  url: string;
  data: any;
  options: any;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  rows = {};

  constructor(private http: HttpClient) { }

  getAll(): any {
    const url = `${environment.api.get}`;
    return this.http.get(url);
  }


  // makeRequest(action: StoredRequest) {
  //   let options = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   return this.http.post(`${environment.api.post}`, action.data, options);
  // }

  // sendDevice(): any {
  //   return this.http.post(`${environment.api.post}`, action.data, options,
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   });
  // }
}
