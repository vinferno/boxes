import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';

import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from "@angular/forms";
import { galleryReducer } from './gallery.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('gallery', galleryReducer),
    FormsModule,
  ],
  exports: [GalleryComponent],
  declarations: [GalleryComponent]
})
export class GalleryModule { }

