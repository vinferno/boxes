import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public base = window.location.host === 'localhost:4200' ? 'https://localhost:4200/' : 'https://artboxes.herokuapp.com/';
  constructor(
    private http: HttpClient,
  ) { }

  public test() {

    console.log(window.location.host);
    console.log(this.base);
    this.http.get(this.base + 'api').subscribe( res => {
      console.log(res);
    });
  }
}
