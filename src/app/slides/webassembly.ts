import {Component} from '@angular/core';


@Component({
  template: `
    <tcc-master-regular headline="WebAssembly">
      <h1>WebAssembly</h1>
    </tcc-master-regular>
  `
})
export class WebAssembly0 {
}

@Component({
  template: `
    <tcc-master-regular headline="WebAssembly">
      <div>
        <ul>
          <li>Bytecode im Browser</li>
          <li>2. Sprache neben JavaScript</li>
          <li>Ziel: Performance (verlässlich)</li>
          <li>Nur Numbers</li>
          <li>Kein Garbage Collector ☠</li>
          <li>Kein Zugriff auf DOM ☠</li>
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
      <img src="assets/images/figma.png" width="70%">
    </tcc-master-regular>
  `
})
export class WebAssemblyUC1 {
}

@Component({
  template: `
    <tcc-master-regular headline="WebAssembly">
      <img src="assets/images/festo.jpg" width="70%">
    </tcc-master-regular>
  `
})
export class WebAssemblyUC2 {
}

@Component({
  template: `
    <tcc-master-regular headline="WebAssembly">
      <code><pre>(module
  (import "math" "exp" (func $exp (param f64) (result f64)))
  (func (export "doubleExp") (param $0 f64) (result f64)
    (f64.mul
      (call $exp
        (get_local $0)
      )
      (f64.const 2)
    )
  )
)</pre></code>
    </tcc-master-regular>
  `
})
export class WebAssemblyCode {
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

export const webAssemblySlides = [
  WebAssembly0,
  WebAssembly1,
  WebAssemblyUC1,
  WebAssemblyUC2,
  WebAssemblyCode,
  WebAssembly2,
];
