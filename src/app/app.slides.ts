import { SlideComponents } from '@w11k/ngx-present';
import { intro } from './slides/intro';
import { outro } from './slides/outro';
import { typescriptSlides } from './slides/typescript';
import { rxSlides } from './slides/rxjs';
import { smoothSlides } from './slides/smooth';
import { webAssemblySlides } from './slides/webassembly';
import { jsSlides } from './slides/javascript';
import { reactSlides } from './slides/react';
import { npmSlides } from './slides/npm';

export const slides: SlideComponents = [
  ...intro,
  ...jsSlides,
  ...typescriptSlides,
  ...webAssemblySlides,
  ...npmSlides,
  ...rxSlides,
  ...smoothSlides,
  ...reactSlides,
  ...outro,
];
