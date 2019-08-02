import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import {Route, RouterModule} from "@angular/router";
const routes: Route[] = [
  {path: '', component: DashComponent }
];
@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashModule { }
