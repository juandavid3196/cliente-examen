import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Ip } from '../Interfaces/ip';

@Injectable({
  providedIn: 'root'
})
export class MapservicesService {
  private URL ='http://localhost:3050/';
  constructor(private http: HttpClient) { }
  
  setData(ip:Ip):Observable<any>{
    const path = `${this.URL}`;
    return this.http.post(path,ip);
  }

  getData():Observable<any>{
    const path = `${this.URL}`;
    return this.http.get(path);
  }

}
