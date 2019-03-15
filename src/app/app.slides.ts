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
  outro,
];
