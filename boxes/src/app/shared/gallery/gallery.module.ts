import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryComponent} from "../../features/gallery/gallery.component";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [GalleryComponent]
})
export class GalleryModule { }
