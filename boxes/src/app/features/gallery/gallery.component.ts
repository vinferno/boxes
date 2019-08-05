import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vf-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images = [
    {},
    {},
    {},
    {},
    {},
  ];
  constructor() { }

  ngOnInit() {
  }

}
