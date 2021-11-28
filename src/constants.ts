import { AnimationType, ExtendedAnimationShapeType } from './types';

export const PREDEFINED_ANIMATIONS: Record<
  AnimationType,
  ExtendedAnimationShapeType
> = {
  blocks: {
    y: '60px',
    interval: 0.07,
    duration: 0.7,
  },
  wave: {
    y: '40px',
    interval: 0.04,
    duration: 0.4,
    ease: 'ease-in-out',
  },
  float: {
    x: '200px',
    ease: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    duration: 1.2,
    interval: 0.1,
  },
  bounce: { y: '200px', ease: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' },
  throw: {
    y: '200px',
    scale: 2,
    interval: 0.07,
  },
  diagonal: {
    x: '200px',
    y: '-200px',
    ease: 'cubic-bezier(0.68, -4.55, 0.265, 1.55)',
  },
  rifle: {
    y: '100px',
    x: '-500px',
    ease: 'ease-in',
    duration: 0.3,
    interval: 0.03,
  },
  lights: {
    y: '-20px',
    ease: 'ease-out',
    duration: 1,
    interval: 0.4,
  },
};

export const WHITE_SPACE_CODE = ' ';
export const DEFAULT_INTERVAL = 0.04;
export const DEFAULT_DURATION = 0.4;
export const DEFAULT_TYPE = 'words';
export const DEFAULT_ANIMATION = {
  y: '-30px',
};
export const DEFAULT_ANIMATION_TYPE = null;
export const DEFAULT_TAG = 'div';
export const DEFAULT_INTESECTION_OBSERVER_ROOT_MARGIN = '20%';
export const DEFAULT_THRESHOLD = 0;
