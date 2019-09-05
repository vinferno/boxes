import { ActionReducerMap } from '@ngrx/store';
import { galleryReducer } from './gallery/gallery.reducer';
export const reducers: ActionReducerMap<any> = {
  gallery: galleryReducer,
};
