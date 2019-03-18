import { SlideComponents } from '@w11k/ngx-present';
import { intro } from './slides/intro';
import { outro } from './slides/outro';
import { typescriptSlides } from './slides/intro_typescript';
import { rxSlides } from './slides/rxjs_snippet';
import { smoothSlides } from './slides/smooth';
import { webAssemblySlides } from './slides/webassembly';

export const slides: SlideComponents = [
  ...intro,
  ...typescriptSlides,
  ...webAssemblySlides,
  ...rxSlides,
  ...smoothSlides,
  ...outro,
];
