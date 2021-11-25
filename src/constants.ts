import { AnimationShapeType, AnimationType } from './types';

export const PREDEFINED_ANIMATIONS: Record<AnimationType, AnimationShapeType> =
  {
    blocks: {
      y: '-40px',
    },
    wave: {
      y: '40px',
    },
    float: { x: '200px', y: '0' },
    bounce: { y: '200px', ease: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' },
    throw: {
      y: '200px',
      scale: 4,
    },
    diagonal: {
      x: '200px',
      y: '-200px',
      ease: 'cubic-bezier(0.68, -4.55, 0.265, 1.55)',
      duration: 0.6,
    },
  };

export const WHITE_SPACE_CODE = '&nbsp;';
export const DEFAULT_INTERVAL = 0.04;
export const DEFAULT_TYPE = 'words';
export const DEFAULT_ANIMATION = {
  y: '-30px',
};
export const DEFAULT_ANIMATION_TYPE = null;
export const DEFAULT_TAG = 'div';
export const DEFAULT_INTESECTION_OBSERVER_ROOT_MARGIN = '200px';
export const DEFAULT_THRESHOLD = 0;
