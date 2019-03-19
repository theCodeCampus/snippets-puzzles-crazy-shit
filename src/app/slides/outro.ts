import {Component} from '@angular/core';

@Component({
  template: `
    <div style="text-align: center; background: black; position: relative">
      <img src="assets/images/wanderer.jpg" style="height: 100vh">
      <div style="position: absolute; bottom: 1em; right: 1em; left: 1em; text-align: center; color: white">
        DUCKOMENTA, <a style="color: white" href="https://www.duckomenta.de" target="_blank">duckomenta.de</a>
      </div>
    </div>
  `
})
export class WandererSlide {}

@Component({
  template: `
    <tcc-master-section-title>
      Have Fun!
    </tcc-master-section-title>
  `
})
export class EndSlide {}


export const outro = [
  EndSlide,
  WandererSlide,
];
