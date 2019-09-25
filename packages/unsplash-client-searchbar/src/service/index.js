import { Mock } from "shared-api";
import { Subject } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map
} from "rxjs/operators";

export default class Search {
  constructor(query = "") {
    this.terms = new Subject({ query }).pipe(...this.pipeData());
  }

  subscribe(cb) {
    this.terms.subscribe(cb);
  }

  unsubscribe() {
    this.terms.unsubscribe();
  }

  pipeData() {
    return [
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(({ query }) => Mock.all(query)),
      map(result => result.data.data)
    ];
  }

  pushTerm(value) {
    this.terms.next({ query: value });
  }
}
