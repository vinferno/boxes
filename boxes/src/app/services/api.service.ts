import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public base = `https://${window.location.host}/`;
  constructor(
    private http: HttpClient,
  ) {
    if (this.base.includes('localhost')) {
      this.base = `http://${window.location.host}/`.slice(0, -5) + '5000/';
    }
    this.base += 'api-';
  }
  public get<T>(url): T {
    return this.http.get(this.base + url) as any;
  }
}
