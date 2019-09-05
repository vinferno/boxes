import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { GalleryModule } from './gallery/gallery.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10, // Retains last 25 states
    }),
    GalleryModule,
  ],
  exports: [
    StoreModule,
    StoreDevtoolsModule,
    GalleryModule,
  ]
})
export class DataStoreModule { }

