import { Injectable } from '@angular/core';
// rxjs
import { merge, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, scan, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService<T> {

    constructor(private http:HttpClient) {}
    addItem(item: T) {}
    deleteItem(item: T) {}
    selectItem(item: T) {}
    updateItem(item: T) {}
}
