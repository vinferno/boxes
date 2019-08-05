import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from './pages/landing/landing.component';
import {NavbarComponent} from './features/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { GalleryComponent } from './features/gallery/gallery.component';
import {GalleryModule} from "./shared/gallery/gallery.module";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
