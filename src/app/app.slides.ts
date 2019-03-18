import {SlideComponents} from '@w11k/ngx-present';
import {intro} from './intro';
import {outro} from './outro';
import {
  WhyTypeScriptSlide1,
  WhyTypeScriptSlide2,
  WhyTypeScriptSlide3,
  WhyTypeScriptSlide4,
  WhyTypeScriptSlide5,
  WhyTypeScriptSlide6,
  WhyTypeScriptSlide7,
  WhyTypeScriptSlide8,
  WhyTypeScriptSlide9
} from "./slides/intro_typescript";
import {RxJS1, RxJS2} from "./slides/rxjs_snippet";
import {Smooth1, Smooth2, Smooth3, Smooth4, Smooth5, Smooth6} from "./slides/smooth";
import {WebAssembly1, WebAssembly2} from "./slides/webassembly";

export const slides: SlideComponents = [
  intro,
  WhyTypeScriptSlide1,
  WhyTypeScriptSlide2,
  WhyTypeScriptSlide3,
  WhyTypeScriptSlide4,
  WhyTypeScriptSlide5,
  WhyTypeScriptSlide6,
  WhyTypeScriptSlide7,
  WhyTypeScriptSlide8,
  WhyTypeScriptSlide9,
  WebAssembly1,
  WebAssembly2,
  RxJS1,
  RxJS2,
  Smooth1,
  Smooth2,
  Smooth3,
  Smooth4,
  Smooth5,
  Smooth6,
  outro,
];
