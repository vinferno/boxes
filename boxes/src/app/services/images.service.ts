import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {BehaviorSubject, Observable} from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  public images = new BehaviorSubject([]);

  constructor(private apiService: ApiService, private router: Router) { }

  public upload(formData) {
    return this.apiService.post<Observable<any>>('upload', formData);
  }
  public getAll() {
    return this.apiService.post<Observable<any>>('images', null);
  }
  public getKeyword(keyword) {
    console.log('want', keyword);
    return this.apiService.post<Observable<any>>('images', {keyword});
  }
  public convertBinaryToImageString(image) {
    const answer =  `data:${image.image.contentType};base64,` + this.encode(new Uint8Array(image.image.data.data));
    return answer;
  }


  public encode(input) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let output = "";
    let chr1;
    let chr2;
    let chr3;
    let enc1;
    let enc2;
    let enc3;
    let enc4;
    let i = 0;

    while (i < input.length) {
      chr1 = input[i++];
      chr2 = i < input.length ? input[i++] : Number.NaN; // Not sure if the index
      chr3 = i < input.length ? input[i++] : Number.NaN; // checks are needed here

      // tslint:disable-next-line:no-bitwise
      enc1 = chr1 >> 2;
      // tslint:disable-next-line:no-bitwise
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      // tslint:disable-next-line:no-bitwise
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      // tslint:disable-next-line:no-bitwise
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
        keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }
    return output;
  }
  public getById(body) {
    return this.apiService.post<Observable<{image: any}>>('image', body);
  }

  public goToImage(id) {
    this.router.navigate(['detail-image', 'full-size', id]);
  }
  public deleteImage(id) {
    return this.apiService.post<Observable<{image: any}>>('delete-image', id);
  }

  public updateImages(images) {
    console.log('images update', images.length)
    this.images.next(images);
  }
}
