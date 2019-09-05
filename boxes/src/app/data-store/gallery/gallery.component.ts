import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from './gallery.actions';
import * as fromGallery from './gallery.reducer';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  gallerys: Observable<any>;


  constructor(private store: Store<fromGallery.State>) { }

  ngOnInit() {
    this.gallerys = this.store.select(fromGallery.selectAll);
  }

  createGallery() {
    // const gallery: fromGallery.Gallery = {
    //   id: new Date().getUTCMilliseconds().toString(),
    //   size: 'small'
    // };
    //
    // this.store.dispatch( new actions.Create(gallery) );
  }

  updateGallery(id, change) {
    this.store.dispatch( new actions.Update(id, change) )
  }

  deleteGallery(id) {
    this.store.dispatch( new actions.Delete(id) )
  }

  getProps(obj) {
    return Object.keys(obj);
  }

  saveProp(item, prop, input ) {
    console.log(input);
    console.log(input.value);
    const change = {};
    change[prop] = input.value;
    this.store.dispatch( new actions.Update(item.id, change) );
  }

  cancelProp(item, prop, input ) {
    console.log(input);
    console.log(input.value);
    const change = {};
    input.value = item[prop];
  }
}



