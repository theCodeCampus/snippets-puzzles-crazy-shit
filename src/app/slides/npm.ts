import { Component } from '@angular/core';

@Component({
  template: `
    <tcc-master-regular headline="NPM">
      <h1>NPM</h1>
    </tcc-master-regular>
  `
})
export class NpmSlide0 {
}

@Component({
  template: `
    <tcc-master-regular headline="NPM">
      <div>
        <h3>Wer hat schon mal ein NPM-Paket veröffentlicht?</h3>
        <tcc-code language="shell" [code]="publish"></tcc-code>
      </div>
    </tcc-master-regular>
  `
})
export class NpmSlide1 {
  publish = `npm publish`;
}

@Component({
  template: `
    <tcc-master-regular headline="NPM">
      <div>
        <h3>Wer hat dabei Tags benutzt?</h3>
        <tcc-code language="shell" [code]="publish"></tcc-code>
        und dann
        <tcc-code language="shell" [code]="install"></tcc-code>
      </div>

    </tcc-master-regular>
  `
})
export class NpmSlide2 {
  publish = `npm publish --tag next`;
  install = `npm install foobar@next`;
}

@Component({
  template: `
    <tcc-master-regular headline="NPM">
      <div>
        <h3>Wer hat schon mal den Tag <code>latest</code> verwendet?</h3>
        <tcc-code language="shell" [code]="install"></tcc-code>
        oder
        <tcc-code language="json" [code]="packageJson" headline="package.json"></tcc-code>
      </div>

    </tcc-master-regular>
  `
})
export class NpmSlide3 {
  install = `npm install foobar@latest`;
  packageJson = `
{
  "dependencies": {
    "foobar": "latest"
  }
}
  `;
}

@Component({
  template: `
    <tcc-master-regular headline="NPM">
      <div>
        <tcc-code language="shell" [code]="publish"></tcc-code>
        <h3>Welche Version bekommt man?</h3>
      </div>

    </tcc-master-regular>
  `
})
export class NpmSlide4 {
  publish = `
git checkout release/2.0.0
npm publish
git checkout hotfix/1.2.3
npm publish

npm install foobar@latest
`;
}


@Component({
  template: `
    <div style="background: black; text-align: center">
      <img src="assets/images/facepalm.webp" style="height: 100vh">
    </div>
  `
})
export class NpmSlide5 {}

export const npmSlides = [
  NpmSlide0,
  NpmSlide3,
  NpmSlide1,
  NpmSlide2,
  NpmSlide4,
  NpmSlide5,
];
