import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";

interface User {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService: ApiService, private router: Router) { }

  public gotoProfile(id) {
    console.log('id', id);
    this.router.navigate(['profile', 'user', id]);
  }

  public getUsers() {
    return this.apiService.get<Observable<User[]>>('users');
  }
  public register(body) {
    return this.apiService.post<Observable<User>>('users', body);
  }
  public getById(body) {
    return this.apiService.post<Observable<User>>('user', body);
  }

}
