import * as actions from './gallery.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

// Main data interface
export class Gallery {
    id: string;
    image: any;
    constructor(id) {
      this.id = id;
    }
}

// Entities class
export class GalleryEntities {
  ids: string[];
  entities: {[key: string]: Gallery};
}

// Entity adapter
export const galleryAdapter = createEntityAdapter<Gallery>();
export interface State extends EntityState<Gallery> { }


// Default data / initial state

const defaultGallery = {
    ids: [],
    entities: {
    }
};

export const initialState: State = galleryAdapter.getInitialState(defaultGallery);

// Reducer

export function galleryReducer(
    state: State = initialState,
    action: actions.GalleryActions) {

    switch (action.type) {

        case actions.CREATE:
            return galleryAdapter.addOne(action.gallery, state);

        case actions.UPDATE:
            return galleryAdapter.updateOne({
                id: action.id,
                changes: action.changes,
            }, state);

        case actions.DELETE:
            return galleryAdapter.removeOne(action.id, state)

        default:
            return state;
        }

}

// Create the default selectors

export const getGalleryState = createFeatureSelector<State>('gallery');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = galleryAdapter.getSelectors(getGalleryState);

