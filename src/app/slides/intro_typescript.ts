import {Component} from '@angular/core';

// <tcc-code language="typescript" headline="sign_in.po.ts" [code]="testCode"></tcc-code>

@Component({
  template: `
    <tcc-master-regular headline="Warum TypeScript?">
      <img src="assets/images/derschrei1.jpg"/>
    </tcc-master-regular>
  `
})
export class WhyTypeScriptSlide1 {
}


@Component({
  template: `
    <tcc-master-regular headline="Warum TypeScript?">
      <div>
        <h3>Duck Typing</h3>
        <ul>
          <li>Wikipedia: "...bei dem der Typ eines Objektes nicht durch seine Klasse beschrieben wird, sondern
            durch das Vorhandensein bestimmter Methoden oder Attribute."
          </li>
          <li>„Wenn ich einen Vogel sehe, der wie eine Ente läuft, wie eine Ente schwimmt und wie eine Ente
            schnattert, dann nenne ich diesen Vogel eine Ente.“
          </li>
        </ul>
      </div>
    </tcc-master-regular>
  `
})
export class WhyTypeScriptSlide2 {
}

@Component({
  template: `
    <tcc-master-regular headline="Warum TypeScript?">
      <img src="assets/images/derschrei1.jpg"/>
    </tcc-master-regular>
  `
})
export class WhyTypeScriptSlide3 {
}

@Component({
  template: `
    <tcc-master-regular headline="Warum TypeScript?">
      <div>
        <img src="assets/images/derschrei2.jpg"/>
        <div>
          <small>DUCKOMENTA, https://www.duckomenta.de/</small>
        </div>
      </div>
    </tcc-master-regular>
  `
})
export class WhyTypeScriptSlide4 {
}


@Component({
  template: `
    <tcc-master-regular headline="Typisierung">
      <div>
        <ul>
          <li>
            Wann wird der Typ geprüft?
            <ul>
              <li class="fragment"><b>statische</b> Typisierung: <br>
                <code>String s = new String();</code>
              </li>
              <li class="fragment"><b>dynamische</b> Typisierung: <br>
                <code>var s = "a"; s = 3;</code>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </tcc-master-regular>
  `
})
export class WhyTypeScriptSlide5 {
}

@Component({
  template: `
    <tcc-master-regular headline="Typisierung">
      <div>
        <ul>
          <li>
            Wie streng sind die Typen?
            <ul>
              <li class="fragment"><b>schwache</b> Typisierung:<br>
                <code>s = "Zahl " + 5;</code>
              </li>
              <li class="fragment"><b>starke</b> Typisierung: <br>
                <code>s = "Zahl " + str(5)</code>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </tcc-master-regular>
  `
})
export class WhyTypeScriptSlide6 {
}

@Component({
  template: `
    <tcc-master-regular headline="Typisierung">
      <div>
        <ul>
          <li>
            Dynamische Typisierung nicht grundsätzlich ein Problem
            <ul>
              <li>Python, Ruby, ...</li>
            </ul>
          </li>
          <li>
            JavaScript kombiniert aber
            <ul>
              <li>dynamische Typisierung</li>
              <li>schwache Typisierung</li>
            </ul>
        </ul>
      </div>
    </tcc-master-regular>
  `
})
export class WhyTypeScriptSlide7 {
}

@Component({
  template: `
    <tcc-master-regular headline="TypeScript">
      <div>
        <ul>
          <li>Wir können die Runtime (Browser, NodeJS) nicht fixen...</li>
          <li>... aber verhindern, dass falscher Code ausgeliefert wird</li>
        </ul>
        <ul>
          <li>Das geniale an TypeScript: Es bleibt JavaScript!</li>
          <li>Seht den TypeScript-Compiler wie einen Super-Linter</li>
        </ul>
      </div>
    </tcc-master-regular>
  `
})
export class WhyTypeScriptSlide8 {
}

@Component({
  template: `
    <tcc-master-regular headline="TypeScript">
      <div><h3>Demo: JSON Use Case</h3></div>
    </tcc-master-regular>
  `
})
export class WhyTypeScriptSlide9 {
}

