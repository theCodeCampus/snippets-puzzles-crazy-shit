import {SlideComponents} from '@w11k/ngx-present';
import {wtfSlides} from './slides/angular';
import {intro} from './slides/intro';
import {jsSlides} from './slides/javascript';
import {lintSlides} from "./slides/lint";
import {npmSlides} from './slides/npm';
import {outro} from './slides/outro';
import {puzzlesSlides} from "./slides/puzzles";
import {rxSlides} from './slides/rxjs';
import {smoothSlides} from './slides/smooth';
import {webAssemblySlides} from './slides/webassembly';
import {typescriptSlides} from './slides/why-typescript';

export const slides: SlideComponents = [
  ...intro,
  ...jsSlides,
  ...typescriptSlides,
  ...webAssemblySlides,
  ...npmSlides,
  ...rxSlides,
  ...wtfSlides,
  ...smoothSlides,
  // ...reactSlides,
  // ...typeInferenceSlides,
  puzzlesSlides,
  lintSlides,
  ...outro,
];
