import {Subject} from "rxjs";

const sub = new Subject<number>();

sub.subscribe(value => {
  if (value === 0) {
    sub.next(1);
  }
});

sub.subscribe(value => {
  console.log(value);
});

sub.next(0);
