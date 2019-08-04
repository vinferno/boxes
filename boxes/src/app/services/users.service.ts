import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

interface User {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService: ApiService) { }

  public getUsers() {
    return this.apiService.get<Observable<User[]>>('users');
  }
  public register(body) {
    return this.apiService.post<Observable<User>>('users', body);
  }
}
