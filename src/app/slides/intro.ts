import { Component } from '@angular/core';

@Component({
  template: `
    <tcc-master-title>
      <ng-container top>
        <div class="logo">
          <img src="assets/images/tcc-logo-white.svg" alt="theCodeCampus Logo" class="img-responsive" style="max-height: 4em; margin-bottom: 1em;">
        </div>
        <div class="logo">
          <img src="assets/images/w11k-logo.svg" alt="w11k Logo" class="img-responsive" style="max-height: 3.5em; margin-bottom: 2em;">
        </div>
      </ng-container>
  
      <ng-container title>
        Snippets & Puzzles<br>
        <small>Crazy Shit moderner Frontend-Entwicklung</small>
      </ng-container>
  
      <ng-container bottom>
        <div style="margin-top: 4em">
          <img src="assets/images/logos/JSD_Logo_weiss.png" style="margin-left: 2em">
          <img src="assets/images/logos/HCD_Logo_weiss.png" style="margin-left: 2em">
          <img src="assets/images/logos/AD_Logo_weiss.png" style="margin-left: 2em">
          <img src="assets/images/logos/RD_Logo_weiss.png" style="margin-left: 2em">
        </div>
      </ng-container>
  
    </tcc-master-title>
  `
})
export class TitleSlide {}


@Component({
  template: `
    <tcc-master-regular headline="Über mich">
      <pre markdown>
        * Roman Roelofsen - a.k.a Alpha Geek
        * W11K / theCodeCampus
        * TypeScript, Angular, und alles mögliche
      </pre>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class AboutSlide {}


export const intro = [
  TitleSlide,
  AboutSlide,
];
