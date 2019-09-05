import { Action } from '@ngrx/store';
import { Gallery }  from './gallery.reducer';


export const CREATE     = '[Gallerys] Create';
export const UPDATE     = '[Gallerys] Update';
export const DELETE     = '[Gallerys] Delete';

export class Create implements Action {
    readonly type = CREATE;
    constructor(public gallery: Gallery) { }
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(
        public id: string,
        public changes: Partial<Gallery>,
      ) { }
}

export class Delete implements Action {
    readonly type = DELETE;
    constructor(public id: string) { }
}

export type GalleryActions
= Create
| Update
| Delete;


