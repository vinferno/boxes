import { Component, OnInit } from '@angular/core';
import {ImagesService} from "../../services/images.service";

@Component({
  selector: 'vf-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images = null;
  constructor(public imagesService: ImagesService) { }

  ngOnInit() {
    this.images = this.imagesService.images;
    this.imagesService.getAll().subscribe( res => {
      console.log('images', res);
      this.imagesService.updateImages(res);
      this.images = this.imagesService.images;
    });
  }

}
