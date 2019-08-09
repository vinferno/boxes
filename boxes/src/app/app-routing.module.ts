import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'dash', loadChildren: './pages/dash/dash.module#DashModule'},
  { path: 'register', loadChildren: './pages/register/register.module#RegisterModule'},
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfileModule'},
  { path: 'detail-image', loadChildren: './pages/detail-image/detail-image.module#DetailImageModule'},
  { path: '**', redirectTo: 'dash'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
