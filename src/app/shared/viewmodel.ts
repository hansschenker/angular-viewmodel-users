export type EditMode = 'Add' | 'Update'

export interface Viewmodel<T> {
    items: T[];
    selectedItem: T;
    editMode: EditMode;
    editedItem: T;
}

export type vmReducer<T> = (vm: Viewmodel<T>) => Viewmodel<T>;



