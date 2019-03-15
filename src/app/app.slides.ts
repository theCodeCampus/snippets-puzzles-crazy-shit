import {SlideComponents} from '@w11k/ngx-present';
import {intro} from './intro';
import {outro} from './outro';
import {
  WhyTypeScriptSlide1,
  WhyTypeScriptSlide2,
  WhyTypeScriptSlide3,
  WhyTypeScriptSlide4,
  WhyTypeScriptSlide5
} from "./slides/intro_typescript";

export const slides: SlideComponents = [
  intro,
  WhyTypeScriptSlide1,
  WhyTypeScriptSlide2,
  WhyTypeScriptSlide3,
  WhyTypeScriptSlide4,
  WhyTypeScriptSlide5,
  outro,
];
