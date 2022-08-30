// import { Viewmodel } from './../types/viewmodel';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, distinctUntilKeyChanged, scan } from 'rxjs/operators';

export class ObservableStore<VM> {
  private _store: BehaviorSubject<VM>;
  private _stateUpdate = new Subject<VM>();

  constructor(initialState: VM) {
    this._store = new BehaviorSubject(initialState);
    this._stateUpdate.pipe(
      /*
       * Accumulate state over time using scan.
       * For this example we will just merge our current state
       * with updated state and emit the result, however
       * this could be any reducer / pattern you wish to follow.
       */
      scan((current, updated) => { return { ...current, ...updated } }, initialState)
    ).subscribe(this._store);
  }

  /*
   * Select a slice of state based on key.
   */
  selectState(key: keyof VM): Observable<VM[keyof VM]>  {
    return this._store.pipe(
      distinctUntilKeyChanged(key),
      map(state => state[key])
    );
  }

  /*
   * Update state with new object to merge.
   */
  updateState(newState: VM): void  {
    this._stateUpdate.next(newState);
  }

  state(): VM {
    return this._store.value;
  } 
  /*
   * Subscribe to any store state changes.
   */
  stateChanges() {
    return this._store.asObservable();
  }
}