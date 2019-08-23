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

  constructor(private http: HttpClient) { }
  rows = {};


  // const req = this.http.post('http://careers.picpay.com/tests/mobdev/transaction', {
  //   userId: 1,
  //   card_number: '1111111111111111'
  // })
  //   .subscribe(
  //     res => {
  //       console.log(res);
  //     },
  //     err => {
  //       console.log('Erro');
  //     }
  //   );

  getAll(): any {
    const url = `${environment.api.get}`;
    return this.http.get(url);
  }
}
