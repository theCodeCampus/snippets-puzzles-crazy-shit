import { Component } from '@angular/core';

@Component({
  template: `
    <tcc-master-regular headline="Type Inference">
      <tcc-code language="typescript" [code]="code1"></tcc-code>
      <tcc-code language="typescript" [code]="code2"></tcc-code>
    </tcc-master-regular>
  `
})
export class Slide1 {
  code1 = `
const foo = 1;
// const foo: number = 1;
  `;

  code2 = `
function getData() {
  Math.random() >= 0.5 ? 42 : undefined;
}

const data = getDate(); // number | undefined

data.toFixed(2); // error: possibly undefined

if (data !== undefined) {
  data.toFixed(2); // ok
}
  `;
}


@Component({
  template: `
    <tcc-master-regular headline="Type Inference">
      <tcc-code language="typescript" [code]="code1"></tcc-code>
    </tcc-master-regular>
  `
})
export class Slide2 {
  code1 = `
const data = [1, 2, 3, undefined]; // (number | undefined)[]

const filtered = data.filter(x => x !== undefined);
// filtered: (number | undefined)[] = [1, 2, 3];

filtered.forEach(x => x.toFixed(2)); // error
  `;
}


@Component({
  template: `
    <tcc-master-regular headline="Type Inference">
      <tcc-code language="typescript" [code]="code1"></tcc-code>
    </tcc-master-regular>
  `
})
export class Slide3 {
  code1 = `
const data = [1, 2, 3, undefined]; // (number | undefined)[]

function notUndefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}

const filtered = data.filter(notUndefined);
// filtered: number[] = [1, 2, 3];

filtered.forEach(x => x.toFixed(2)); // ok
  `;
}


@Component({
  template: `
    <tcc-master-regular headline="Type Inference">
      <tcc-code language="typescript" [code]="code1"></tcc-code>
    </tcc-master-regular>
  `
})
export class Slide4 {
  code1 = `
const p1 = Promise.resolve(1);
const p2 = Promise.resolve("2");
const p3 = Promise.resolve(true);

Promise.all([p1, p2, p3]).then(x => {
  console.log(x[0]);
  console.log(x[1]);
  console.log(x[2]);
});
  `;
}


@Component({
  template: `
    <tcc-master-regular headline="Type Inference">
      <tcc-code language="typescript" [code]="code1"></tcc-code>
    </tcc-master-regular>
  `
})
export class Slide5 {
  code1 = `
const p1 = Promise.resolve(1);
const p2 = Promise.resolve("2");
const p3 = Promise.resolve(true);

all({ p1, p2, p3}).then(x => {
  console.log(x.p1);
  console.log(x.p2);
  console.log(x.p3);
});
  `;
}


@Component({
  template: `
    <tcc-master-regular headline="Type Inference">
      <tcc-code language="typescript" [code]="code1"></tcc-code>
    </tcc-master-regular>
  `
})
export class Slide6 {
  code1 = `
function all<T>(map: { [P in keyof T]: Promise<T[P]> }): Promise<T> {
  const keys = Object.keys(map);

  // ensure same order for values and keys
  const values$ = keys.map(key => (map as any)[key]);

  return Promise.all(values$).then(values => {
    const mapOfValues: any = {};

    keys.forEach((key, index) => {
      mapOfValues[key] = values[index];
    });

    return mapOfValues;
  });
}
  `;
}

export const typeInferenceSlides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
];
