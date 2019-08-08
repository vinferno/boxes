import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private apiService: ApiService) { }

  public upload(formData) {
    return this.apiService.post<Observable<any>>('upload-image', formData);
  }
  public getAll() {
    return this.apiService.get<Observable<any>>('images');
  }
}
