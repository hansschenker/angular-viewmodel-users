import { Observable } from "rxjs";

export type Action = 'Add' | 'Update'

export interface Viewmodel<T> {
    // items: Observable<T[]>;
    items: T[];
    selectedItem: T;
    // editMode: EditMode;
    // editedItem: T;
}

export interface vmFn<T> { (vm: Viewmodel<T>) : Viewmodel<T> }



