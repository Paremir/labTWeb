import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {clear, countSelector, decrease, increase, updatedAtSelector} from './reducers/counter';
import {count, map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store ) {
  }

  date: Date = new Date()
  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0 ))
  updatedAt$ = this.store.select(updatedAtSelector);
  increase() {
    this.store.dispatch(increase())
  }

  decrease() {
    this.store.dispatch(decrease())
  }

  clear() {
    this.store.dispatch(clear())
  }
}


