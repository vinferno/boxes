import { Component, OnInit } from '@angular/core';
import {ImagesService} from "../../services/images.service";

@Component({
  selector: 'vf-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images = [
  ];
  constructor(public imagesService: ImagesService) { }

  ngOnInit() {
    this.imagesService.getAll().subscribe( res => {
      console.log('images', res);
      this.images = res;
    })
  }

}
