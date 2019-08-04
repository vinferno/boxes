import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import {Route, RouterModule} from "@angular/router";
import {ListSelectComponent} from "../../features/list-select/list-select.component";
const routes: Route[] = [
  {path: '', component: DashComponent }
];
@NgModule({
  declarations: [
    DashComponent,
    ListSelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashModule { }
