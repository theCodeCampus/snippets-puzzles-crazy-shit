import { Component } from '@angular/core';

@Component({
  template: `
    <tcc-master-regular headline="JS WAT">
      <div>
        <pre markdown>
          <a href="https://www.destroyallsoftware.com/talks/wat" target="_blank">JS WAT Talk</a>
        </pre>
        <tcc-code language="typescript" [code]="code"></tcc-code>
      </div>
    </tcc-master-regular>
  `
})
export class WAT1aSlide {
  code = `
[] + [];

[] + {};

{} + [];

{} + {};
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="JS WAT">
      <div>
        <pre markdown>
          <a href="https://www.destroyallsoftware.com/talks/wat" target="_blank">JS WAT Talk</a>
        </pre>
        <tcc-code language="typescript" [code]="code"></tcc-code>
      </div>
    </tcc-master-regular>
  `
})
export class WAT1bSlide {
  code = `
[] + []; // ""

[] + {}; // "[object Object]"

{} + []; // 0

{} + {}; // NaN
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="JS WAT">
      <div>
        <pre markdown>
          <a href="https://www.destroyallsoftware.com/talks/wat" target="_blank">JS WAT Talk</a>
        </pre>
        <tcc-code language="typescript" [code]="code"></tcc-code>
      </div>
    </tcc-master-regular>
  `
})
export class WAT2aSlide {
  code = `
new Array(8).join(); // ",,,,,,,"
  
new Array(8).join("wat" + 1); // "wat1wat1wat1wat1wat1wat1wat1"

new Array(8).join("wat" - 1).concat(" Batman");
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="JS WAT">
      <div style="font-size: 2em;">"NaNNaNNaNNaNNaNNaNNaN Batman"</div>
    </tcc-master-regular>
  `
})
export class WAT2bSlide {}


@Component({
  template: `
    <tcc-master-regular headline="">
      <tcc-code language="typescript" [code]="alert"></tcc-code>
    </tcc-master-regular>
  `
})
export class JsFuck1Slide {
  alert = `
[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]
+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+
!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+
[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[
]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[
]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!
![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(
![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[
])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[
+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!
+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+(!![]
+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]+(!![]+[])[+[]]+(![]+[][(![]+[])[+[]]+([![
]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+
!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])
[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![
]+[])[+!+[]]])[!+[]+!+[]+[+[]]])()
  `;
}


@Component({
  template: `
    <tcc-master-regular headline="">
      <pre markdown>
        <tcc-code language="typescript" [code]="code"></tcc-code>
      </pre>
    </tcc-master-regular>
  `
})
export class JsFuck2Slide {
  code = `
![]           // false  
!![]          // true
+[]           // 0  
+!![]         // 1
[]+[]         // String
(false+"")[1] // a
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="JS Fuck">
      <div>
        <pre markdown>
          * <a href="http://www.jsfuck.com/" target="_blank">jsfuck.com</a>
          * Codiert jedes JavaScript Snippet mit nur 6 Zeichen
        </pre>
      </div>
    </tcc-master-regular>
  `
})
export class JsFuck3Slide {
}

export const jsSlides = [
  WAT1aSlide,
  WAT1bSlide,
  WAT2aSlide,
  WAT2bSlide,
  JsFuck1Slide,
  JsFuck2Slide,
  JsFuck3Slide,
];

