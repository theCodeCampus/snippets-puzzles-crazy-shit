import {Component} from '@angular/core';

@Component({
  template: `
    <tcc-master-regular>
      <div>
        <h1>Bosque Programming Language</h1>
      </div>
    </tcc-master-regular>
  `
})
export class Slide1 {
}

@Component({
  template: `
    <tcc-master-regular headline="Bosque Programming Language">
      <ul>
        <li>Microsoft Research Project...
          <ul>
            <li>"... for writing code that is <b>simple</b>, <b>obvious</b>, and easy to reason about ..."</li>
            <li>"The key design features of the language provide ways to avoid <b>accidental complexity</b> in the
              development and coding process."
            </li>
            <li>"The result is improved <b>developer productivity</b>, <b>increased software quality</b>, and enable a
              range of
              <b>new compilers and developer tooling experiences</b>."
            </li>
          </ul>
        </li>
        <li>Basiert auf und erweitert TypeScript</li>
      </ul>
    </tcc-master-regular>
  `
})
export class Slide2 {
}

@Component({
  template: `
    <tcc-master-regular headline="Bosque Programming Language">
      <ul>
        <li>Immutable Values</li>
        <li>Reference Parameter Threading</li>
        <li>Typed Strings</li>
        <li>Iterative Processing: high-level functors statt for/while</li>
        <li><code>recursive</code> keyword </li>
        <li>...</li>
      </ul>
    </tcc-master-regular>
  `
})
export class Slide3 {
}

@Component({
  template: `
    <tcc-master-regular headline="TSLint">
      <ul>
        <li>Gute Ideen übernehmen und als TSLint Regel implementieren</li>
      </ul>
    </tcc-master-regular>
  `
})
export class Slide4 {
}

@Component({
  template: `
    <tcc-master-regular headline="TSLint">
      <ul>
        <li>TypeScript Fehler werden in der IDE angezeigt</li>
        <li>(Einfache) Linter-Fehler werden in der IDE angezeigt</li>
      </ul>
      <ul>
        <li>TSLint vefügt aber auch über Regeln mit "type checking" (z.B. promise-function-async)</li>
        <li><code>tslint -p tsconfig.json src/**/*.ts</code></li>
        <li>IDEs verwenden aber nur den "einfachen" Modus</li>
      </ul>
    </tcc-master-regular>
  `
})
export class TSLint1 {
}

@Component({
  template: `
    <tcc-master-regular headline="TSLint">
      <h3>Lösung: typescript-tslint-plugin</h3>
    </tcc-master-regular>
  `
})
export class TSLint2 {
}

export const lintSlides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  TSLint1,
  TSLint2
];
