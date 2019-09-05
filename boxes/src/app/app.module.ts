import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from './pages/landing/landing.component';
import {NavbarComponent} from './features/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { GalleryComponent } from './features/gallery/gallery.component';
import {GalleryModule} from "./shared/gallery/gallery.module";
import { FileUploaderComponent } from './features/file-uploader/file-uploader.component';
import {FormsModule} from "@angular/forms";
import {DataStoreModule} from "./data-store/data-store.module";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FileUploaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GalleryModule,
    FormsModule,
    DataStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
