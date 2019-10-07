import {Component} from '@angular/core';

@Component({
  template: `
    <tcc-master-regular headline="Design Mode">
      <div>
        <h1>Wie kann man die Kollegen ärgern?</h1>
        <h1>-> Design Mode</h1>
      </div>
    </tcc-master-regular>
  `
})
export class Slide1 {
}

@Component({
  template: `
    <tcc-master-regular headline="JavaScript Puzzlers">
      <ul>
        <li>Kenne die API deiner Umgebung / Libs!</li>
      </ul>
      <img style="height: 80vh" src="assets/images/jp.jpg"/>

    </tcc-master-regular>
  `
})
export class SlideJP1 {
}


@Component({
  template: `
    <tcc-master-regular headline="JavaScript Puzzlers">
      <tcc-code language="typescript" [code]="code1"></tcc-code>
    </tcc-master-regular>
  `
})
export class SlideJP2 {
  code1 = `const heute = new Date(8, 10, 2019);
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="JavaScript Puzzlers">
      <tcc-code language="typescript" [code]="code1"></tcc-code>
    </tcc-master-regular>
  `
})
export class SlideJP3 {
  code1 = `// Jahr - Monat - Tag
const heute = new Date(2019, 10, 8);
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="JavaScript Puzzlers">
      <tcc-code language="typescript" [code]="code1"></tcc-code>
    </tcc-master-regular>
  `
})
export class SlideJP4 {
  code1 = `// Jahr - Monat (0-based) - Tag
const heute = new Date(2019, 9, 8);
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="JavaScript Puzzlers">
      <tcc-code language="typescript" [code]="code1"></tcc-code>
    </tcc-master-regular>
  `
})
export class SlideJP5 {
  code1 = `
parseInt("3"); // ? 

parseInt("zwei"); // ?

["1", "zwei", "3"].map(parseInt); // ?
`;
}

@Component({
  template: `
    <tcc-master-regular headline="JavaScript Puzzlers">
      <tcc-code language="typescript" [code]="code1"></tcc-code>
    </tcc-master-regular>
  `
})
export class SlideJP6 {
  code1 = `
["1", "zwei", "3"].map(parseInt); // [1, NaN, NaN]

// ... entspricht ...

["1", "2", "3"].map((value, index) => {
  return parseInt(value, index);
});
`;
}

@Component({
  template: `
    <tcc-master-regular headline="JavaScript Puzzlers">
      <tcc-code language="typescript" [code]="code1"></tcc-code>
    </tcc-master-regular>
  `
})
export class SlideJP7 {
  code1 = `
["5", "15", "1"].sort() // ?

[5, 15, 1].sort() // ?
`;
}

@Component({
  template: `
    <tcc-master-regular headline="JavaScript Puzzlers">
      <tcc-code language="typescript" [code]="code1"></tcc-code>
    </tcc-master-regular>
  `
})
export class SlideJP8 {
  code1 = `
["5", "15", "1"].sort() // [ "1", "15", "5" ]

[5, 15, 1].sort() // [ 1, 15, 5 ]
`;
}

@Component({
  template: `
    <tcc-master-regular headline="JavaScript Puzzlers">
      <h3>Lösung</h3>
      <tcc-code language="typescript" [code]="code1"></tcc-code>
    </tcc-master-regular>
  `
})
export class SlideJP9 {
  code1 = `
[5, 15, 1].sort((a, b) => a - b); // [ 1, 5, 15 ]
`;
}

@Component({
  template: `
    <tcc-master-regular headline="JavaScript Puzzlers">
      <div>
        <h3>RxJS: Wie ist die Ausgabe?</h3>
        <tcc-code language="typescript" [code]="code"></tcc-code>
      </div>
    </tcc-master-regular>
  `
})
export class SlideRxJS1 {

  code = `
import {Subject} from "rxjs";

const sub = new Subject<number>();

sub.subscribe(value => {
  if (value === 0) {
    sub.next(1);
  }
});

sub.subscribe(value => console.log(value));

sub.next(0);
`;

}

export const puzzlesSlides = [
  Slide1,
  SlideJP1,
  SlideJP2,
  SlideJP3,
  SlideJP4,
  SlideJP5,
  SlideJP6,
  SlideJP7,
  SlideJP8,
  SlideJP9,
  SlideRxJS1,
];
