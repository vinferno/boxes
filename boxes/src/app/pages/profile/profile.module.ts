import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {Route, RouterModule} from "@angular/router";
import {GalleryModule} from "../../shared/gallery/gallery.module";

const routes: Route[] = [
  {path: 'user/:id', component: ProfileComponent}
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GalleryModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class ProfileModule { }
