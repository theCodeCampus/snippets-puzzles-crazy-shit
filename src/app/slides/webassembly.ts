import {Component} from '@angular/core';


@Component({
  template: `
    <tcc-master-regular headline="WebAssembly">
      <div>
        <ul>
          <li>Bytecode im Browser</li>
          <li>2. Sprache neben JavaScript</li>
          <li>Ziel: Performance</li>
        </ul>
      </div>
    </tcc-master-regular>
  `
})
export class WebAssembly1 {
}

@Component({
  template: `
    <tcc-master-regular headline="WebAssembly">
      <div>
        <h4>Wie erzeugt man WebAssembly Code?</h4>
        <ul>
          <li>Gängiger Weg: C, C++, Rust</li>
          <li>Aber es geht besser...</li>
        </ul>
      </div>
    </tcc-master-regular>
  `
})
export class WebAssembly2 {
}

