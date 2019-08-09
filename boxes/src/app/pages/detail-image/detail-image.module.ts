import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailImageComponent } from './detail-image.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {path: 'full-size/:id', component: DetailImageComponent}
];
@NgModule({
  declarations: [DetailImageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DetailImageModule { }
