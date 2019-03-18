import {Component} from '@angular/core';


@Component({
  template: `
    <tcc-master-regular headline="#SmoothGate">
      <div>
        <h3>wetteronline.de wird berühmt</h3>
        <h4>(zumindest in Mozilla's Bugzilla)</h4>
      </div>
    </tcc-master-regular>
  `
})
export class Smooth1 {

}

@Component({
  template: `
    <tcc-master-regular headline="#SmoothGate">
      <div>
        <ul>
          <li>wetteronline.de verwendet MooTools</li>
          <li>
            MooTools erweitert <code>Array</code>
            <tcc-code language="typescript" [code]="mootools1"></tcc-code>
          </li>
          <li>
            Und kopiert dies später nach <code>Elements</code> (alle "enumerable" properties)
            <tcc-code language="typescript" [code]="mootools2"></tcc-code>
          </li>
        </ul>
      </div>
    </tcc-master-regular>
  `
})
export class Smooth2 {

  mootools1 = `Array.prototype.flatten = ...`;

  mootools2 = `
for (var key in Array.prototype) {
  Elements.prototype[key] = Array.prototype[key];
}`;

}

@Component({
  template: `
    <tcc-master-regular headline="#SmoothGate">
      <div>
        <ul>
          <li>
            Neue Methode wird standardisiert und in Firefox ausgeliefert:
            <tcc-code language="typescript" [code]="flatten"></tcc-code>
          </li>
          <li>
            Native Methode <code>map</code>, <code>flatten</code>, etc. sind <b>nicht</b> enumerable
          </li>
        </ul>
      </div>
    </tcc-master-regular>
  `
})
export class Smooth3 {
  flatten = `Array.prototype.flatten`;
}

@Component({
  template: `
    <tcc-master-regular headline="#SmoothGate">
      <div>
        <ul>
          <li>Neue <code>flatten</code> Methode ist nicht enumerable</li>
          <li>Wird nicht nach <code>Elements</code> kopiert</li>
          <li>MooTools geht nicht mehr</li>
        </ul>
      </div>
        <img style="text-align: center; width: 40vw"  src="assets/images/selberschuld.gif"/>
    </tcc-master-regular>
  `
})
export class Smooth4 {
  flatten = `Array.prototype.flatten`;
}

@Component({
  template: `
    <tcc-master-regular headline="#SmoothGate">
      <div>
        <h3>W3C's HTML Design Principles:</h3>
        <ul>
          <li>
            2.1. Support Existing Content ("don't break the web")
          </li>
          <li>Lösung
            <ul>
              <li><code>flatten</code> -> <code>smooth</code>?</li>
            </ul>
          </li>
        </ul>
      </div>
    </tcc-master-regular>
  `
})
export class Smooth5 {
}

@Component({
  template: `
    <tcc-master-regular headline="#SmoothGate">
      <div>
        <h3>W3C's HTML Design Principles:</h3>
        <ul>
          <li>
            2.1. Support Existing Content ("don't break the web")
          </li>
          <li>Lösung
            <ul>
              <li><code>flatten</code> -> <code>flat</code></li>
            </ul>
          </li>
        </ul>
      </div>
    </tcc-master-regular>
  `
})
export class Smooth6 {
}

export const smoothSlides = [
  Smooth1,
  Smooth2,
  Smooth3,
  Smooth4,
  Smooth5,
  Smooth6,
];
