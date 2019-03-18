import {Component} from '@angular/core';


@Component({
  template: `
    <tcc-master-regular headline="RxJS">
      <div>
        <h1>Snippet</h1>
      </div>
    </tcc-master-regular>
  `
})
export class RxJS1 {

}

@Component({
  template: `
    <tcc-master-regular headline="RxJS">
      <div>
        <h3>Wie ist die Ausgabe?</h3>
        <tcc-code language="typescript" [code]="code"></tcc-code>
      </div>
    </tcc-master-regular>
  `
})
export class RxJS2 {

  code = `
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
`;

}

export const rxSlides = [
  RxJS1,
  RxJS2,
];
