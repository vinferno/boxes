import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryComponent} from "../../features/gallery/gallery.component";

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule
  ],
  exports: [GalleryComponent]
})
export class GalleryModule { }
