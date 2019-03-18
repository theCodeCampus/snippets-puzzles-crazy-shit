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
        Crazy Shit moderner Frontend-Entwicklung
      </ng-container>
  
      <ng-container bottom>
      </ng-container>
  
    </tcc-master-title>
  `
})
export class TitleSlide {}


@Component({
  template: `
    <tcc-master-regular headline="Die zwei Hansel da vorne">
      <pre markdown>
        * Roman Roelofsen - a.k.a Alpha Geek
        * Philipp Burgmer - der Web Tech Guru
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
