import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'dash', loadChildren: './pages/dash/dash.module#DashModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
